import './SongSearch.css'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";
import SongDisplay from './SongDisplay';

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

        try {
            // won't need JP name in search since can include all search terms in "anime" with comma separated list
            setSearchResults(songs.filter((element) => {
                return element.anime.toLowerCase().replace(/\s/g, "").includes(search.toLowerCase().replace(/\s/g, ""))
            }).sort((a,b) => (a.anime > b.anime ? 1 : -1))) // sort songs alphabetically by anime name after filter them
        } catch {
            console.log("No Matching Animes Found")
        }
        
    }

    // searches by song name
    const searchSong = (e) => {
        e.preventDefault()

        try {
            setSearchResults(songs.filter((element) => {
                return element.song.toLowerCase().replace(/\s/g, "").includes(search.toLowerCase().replace(/\s/g, ""))
            }).sort((a,b) => (a.anime > b.anime ? 1 : -1)))
        } catch {
            console.log("No Matching Songs Found")
        }
    }

    // searches by artist from comma seperated list
    const searchArtist = (e) => {
        e.preventDefault()

        try {
            setSearchResults(songs.filter((element) => {                
                // artist array split on comma for given song
                const removeWhitespace = element.artist.replace(/\s/g, "")

                return removeWhitespace.toLowerCase().includes(search.toLowerCase())
            }).sort((a,b) => (a.anime > b.anime ? 1 : -1)))
        } catch {
            console.log("No Matching Artists Found")
        }
    }

    const goToAdmin = () => {
        navigate('/anime-search-song/admin')
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
                <SongDisplay song={song}/>
            ))

            }
        </>
    )
}

export default SongSearch;