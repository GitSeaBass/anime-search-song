import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import './App.css'
import SongSearch from "./components/SongSearch"
import SongForm from './components/SongForm'
import { backupData } from "./assets/BackupData"

function App() {
  //for now use state set of songs to search from
  const [songs, setSongs] = useState([])
  const [serverRunning, setServerRunning] = useState(true) 

  const getUrl = "http://localhost:5000/api/songs/"

  useEffect(() => {
    axios.get(getUrl)
    .then(res => {
      setSongs(res.data)
      setServerRunning(true)
      //print data as JSON or string
      //console.log(res.data)
      //console.log(JSON.stringify(res.data))
    })
    .catch(err => {
      console.log(err)
      setSongs(backupData)
      setServerRunning(false)
    })
  }, [])
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/anime-search-song/' element={<SongSearch songs={songs} serverStatus={serverRunning}/>}/>
          <Route path='/anime-search-song/admin' element={<SongForm />} />
          <Route path='*' element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
