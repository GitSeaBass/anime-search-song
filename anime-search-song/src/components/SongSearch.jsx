import './SongSearch.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";

function SongSearch({songs}) {
    const navigate = useNavigate()

    // saving the current search keywords
    const [search, setSearch] = useState('')
    const changeSearch = (e) => {
        setSearch(e.target.value)
    }

    // saves results of the search
    const [searchResults, setSearchResults] = useState([])

    // searches by anime name (substrings supported in search)
    const searchAnime = (e) => {
        e.preventDefault()
        setSearchResults(songs.filter((element) => {
            return element.anime.toLowerCase().replace(/\s/g, "").includes(search.toLowerCase().replace(/\s/g, "")) || element.animeJP.toLowerCase().replace(/\s/g, "").includes(search.toLowerCase().replace(/\s/g, ""))
        }))
    }

    // searches by song name
    const searchSong = (e) => {
        e.preventDefault()
        setSearchResults(songs.filter((element) => {
            return element.song.toLowerCase().replace(/\s/g, "").includes(search.toLowerCase().replace(/\s/g, ""))
        }))
    }

    // searches by artist from comma seperated list
    const searchArtist = (e) => {
        e.preventDefault()
        setSearchResults(songs.filter((element) => {
            // artist array split on comma for given song
            const removeWhitespace = element.artist.replace(/\s/g, "")
            const artistsSplit = removeWhitespace.toLowerCase().split(',')
            return artistsSplit.includes(search.toLowerCase())
        }))
    }

    const goToAdmin = () => {
        navigate('/Anime-Song-Search/admin')
    }

    //creating dropdown list and saving values in state
    const [option, setOption] = useState('anime')
    const changeOption = (e) => {
        setOption(e.target.value)
    }
    
    return (
        <>
            <button onClick={goToAdmin}>Add Song To Database</button>
            <h1>Anime Song Search</h1>
            <h5>Search by show, song name, or artist</h5>

            <select className='option-selector' value={option} onChange={changeOption}>
                <option value='anime'>Anime Name</option>
                <option value='song'>Song Name</option>
                <option value='artist'>Artist</option>
            </select>

            
            {// search option is anime
                option === 'anime'?
                <SearchForm searchFunc={searchAnime} changeSearch={changeSearch}/>
                :
                <></>
            }

            {// search option is song
                option === 'song'?
                <SearchForm searchFunc={searchSong} changeSearch={changeSearch}/>
                :
                <></>
            }

            {// search option is artist
                option === 'artist'?
                <SearchForm searchFunc={searchArtist} changeSearch={changeSearch}/>
                :
                <></>
            }

            

            {searchResults.map((song) => (
                <div key={song.song}><b>{song.anime}</b> Season {song.seasonNum} OP {song.opNum} ({song.overallNum}): <b>{song.song}</b> by {song.artist}</div>
            ))

            }
        </>
    )
}

export default SongSearch;