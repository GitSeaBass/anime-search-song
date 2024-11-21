import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
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

  const getUrl = "localhost:5000/api/songs/"

  useEffect(() => {
    axios.get(getUrl)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/anime-search-song' element={<SongSearch songs={songs}/>}/>
          <Route path='/anime-search-song/admin' element={<SongForm />} />
          <Route path='*' element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
