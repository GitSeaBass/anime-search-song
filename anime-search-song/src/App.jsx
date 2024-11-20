import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import './App.css'
import SongSearch from "./components/SongSearch"
import SongForm from './components/SongForm'

function App() {
  //for now use state set of songs to search from
  const [songs, setSongs] = useState([
    {
        "anime": "Demon Slayer",
        "animeJP": "Kimetsu no Yaiba",
        "song": "Gurenge",
        "artist": "Lisa",
        "seasonNum": 1,
        "opNum": 1,
        "overallNum": 1,
        "isMovie": false,
    },
    {
        "anime": "Demon Slayer",
        "animeJP": "",
        "song": "Kizuna no Kiseki",
        "artist": "Man with a Mission, milet",
        "seasonNum": 3,
        "opNum": 1,
        "overallNum": 4,
        "isMovie": false,
    },
    {
        "anime": "Jujutsu Kaisen",
        "animeJP": "",
        "song": "KaiKai Kitan",
        "artist": "Eve",
        "seasonNum": 1,
        "opNum": 1,
        "overallNum": 1,
        "isMovie": false,
    }
  ])
  const addSong = (song) => {
    songs.push(song)
  }
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Anime-Song-Search' element={<SongSearch songs={songs}/>}/>
          <Route path='/Anime-Song-Search/admin' element={<SongForm addSong={addSong}/>} />
          <Route path='*' element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
