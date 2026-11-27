import { useState } from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

type Anime = {
  id: string
  title: string
  status: 'unwatched' | 'watching' | 'completed'
}

function App() {
  const [title, setTitle] = useState('')
  const [animeList, setAnimeList] = useState<Anime[]>([])
  const [animeToDelete, setAnimeToDelete] = useState<Anime | null>(null)

  function addAnime() {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    setAnimeList((current) => [
      ...current,
      { id: crypto.randomUUID(), title: trimmedTitle, status: 'unwatched' },
    ])
    setTitle('')
  }

  function deleteAnime() {
    if (!animeToDelete) return

    setAnimeList((current) =>
      current.filter((item) => item.id !== animeToDelete.id),
    )
    setAnimeToDelete(null)
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">
          アニメ視聴管理
        </h1>
        <Card elevation={1}>
          <CardContent>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault()
                addAnime()
              }}
            >
              <TextField
                fullWidth
                label="アニメタイトル"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={!title.trim()}
                sx={{ minWidth: 120 }}
              >
                追加
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card elevation={2} className="mt-6">
          <CardContent>
            <h2 className="text-xl font-bold text-slate-900">作品一覧</h2>
            {animeList.length === 0 ? (
              <p className="mt-4 text-slate-600">まだ作品が登録されていません。</p>
            ) : (
              <List>
                {animeList.map((anime) => (
                  <ListItem key={anime.id} sx={{ gap: 2, flexWrap: 'wrap' }}>
                    <ListItemText primary={anime.title} />
                    <FormControl size="small" sx={{ minWidth: 132 }}>
                      <InputLabel id={`status-label-${anime.id}`}>
                        視聴状況
                      </InputLabel>
                      <Select
                        labelId={`status-label-${anime.id}`}
                        value={anime.status}
                        label="視聴状況"
                        onChange={(event) => {
                          setAnimeList((current) =>
                            current.map((item) =>
                              item.id === anime.id
                                ? { ...item, status: event.target.value as Anime['status'] }
                                : item,
                            ),
                          )
                        }}
                      >
                        <MenuItem value="unwatched">未視聴</MenuItem>
                        <MenuItem value="watching">視聴中</MenuItem>
                        <MenuItem value="completed">完了</MenuItem>
                      </Select>
                    </FormControl>
                    <Button color="error" onClick={() => setAnimeToDelete(anime)}>
                      削除
                    </Button>
                  </ListItem>
                ))}
              </List>
            )}
          </CardContent>
        </Card>
      </div>
      <Dialog
        open={animeToDelete !== null}
        onClose={() => setAnimeToDelete(null)}
        aria-labelledby="delete-anime-title"
        aria-describedby="delete-anime-description"
      >
        <DialogTitle id="delete-anime-title">作品の削除</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-anime-description">
            「{animeToDelete?.title}」を削除しますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setAnimeToDelete(null)}>
            キャンセル
          </Button>
          <Button color="error" variant="contained" onClick={deleteAnime}>
            削除する
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  )
}

export default App
