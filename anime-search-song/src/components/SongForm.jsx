import './SongForm.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SongForm({addSong}) {
    const navigate = useNavigate()

    const [songState, setSongState] = useState({
        "anime": "",
        "animeJP": "",
        "song": "",
        "artist": "",
        "seasonNum": 0,
        "opNum": 0,
        "overallNum": 0,
        "isMovie": false,
    })
    const changeSongState = (e) => {       
        setSongState({
            ...songState,
            [e.target.name]: e.target.value
        })
    }

    // requires checking .checked property if using a checkbox
    const changeSongStateTF = (e) => {
        setSongState({
            ...songState,
            [e.target.name]: e.target.checked
        })
    }

    // if include e.preventDefault, page wont refresh but form wont clear, otherwise form wont clear but no refresh
    const submitForm = (e) => {
        e.preventDefault()
        addSong(songState)
        alert("Song Submitted")
    }

    const returnHome = () => {
        navigate('/anime-search-song')
    }

    return(
        <>
            <h1>Add Song to Database</h1>
            <h5>Fill in the form with correct information</h5>

            <form onSubmit={submitForm}>
                <div className='form-group'>
                    <label>Anime Name</label>
                    <input name='anime' type='text' onChange={changeSongState} required></input>
                </div>

                <div className='form-group'>
                    <label>Japanese Anime Name</label>
                    <input name='animeJP' type='text' onChange={changeSongState} ></input>
                </div>

                <div className='form-group'>
                    <label>Song Name</label>
                    <input name='song' type='text' onChange={changeSongState} required></input>
                </div>

                <div className='form-group'>
                    <label>Artists</label>
                    <input name='artist' type='text' onChange={changeSongState} placeholder='Enter as Comma Seperated List' required></input>
                </div>

                <div className='form-group'>
                    <label>Season Number</label>
                    <input name='seasonNum' type='number' min='1' onChange={changeSongState} required></input>
                </div>

                <div className='form-group'>
                    <label>OP Number</label>
                    <input name='opNum' type='number' min='1' onChange={changeSongState} required></input>
                </div>

                <div className='form-group'>
                    <label>Overall OP Number</label>
                    <input name='overallNum' type='number' min='1' onChange={changeSongState} required></input>
                </div>

                <div className='form-group'>
                    <label>Is Movie?</label>
                    <input name='isMovie' type='checkbox' onChange={changeSongStateTF}></input>
                </div>

                <div className='check-form-container'>
                    <h3>Anime Name: {songState.anime}</h3>
                    <h3>Japanese Anime Name: {songState.animeJP}</h3>
                    <h3>Song Name: {songState.song}</h3>
                    <h3>Artist: {songState.artist}</h3>
                    <h3>Season Number: {songState.seasonNum}</h3>
                    <h3>OP Number: {songState.opNum}</h3>
                    <h3>Overall OP Number: {songState.overallNum}</h3>
                    <h3>Is Movie?: {songState.isMovie.toString()}</h3>

                    <input type='submit' id='submit-button'></input>
                    <h5 id='warning-submit-message'>Please Ensure All Above Information Is Correct Before Submitting</h5>
                </div>

                <button onClick={returnHome}>Return To Search</button>
            </form>
        </> 
    )
}

export default SongForm;