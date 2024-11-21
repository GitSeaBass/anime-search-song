import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import './App.css'
import SongSearch from "./components/SongSearch"
import SongForm from './components/SongForm'

function App() {
  //for now use state set of songs to search from
  const [songs, setSongs] = useState([])

  const getUrl = "http://localhost:5000/api/songs/"

  useEffect(() => {
    axios.get(getUrl)
    .then(res => {
      setSongs(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/anime-search-song/' element={<SongSearch songs={songs}/>}/>
          <Route path='/anime-search-song/admin' element={<SongForm />} />
          <Route path='*' element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
