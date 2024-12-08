import './UpdateGrid.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SongDisplay from "./SongDisplay";

function UpdateGrid({ songs }) {
    const url = "http://localhost:5000/api/songs/"
    const navigate = useNavigate()

    const [updateState, setUpdateState] = useState([])
    const changeUpdateState = (e) => {       
        setUpdateState({
            ...updateState,
            [e.target.name]: e.target.value
        })
    }
    const changeUpdateStateTF = (e) => {
        setUpdateState({
            ...updateState,
            [e.target.name]: e.target.checked.toString()
        })
    }

    const updateClick = (e) => {
        const songId = e.target.name
        const putUrl = url + songId

        axios.put(putUrl, updateState)
        .then(() => {
            alert('Song Successfully Updated')
            navigate('/anime-search-song/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const deleteSong = (e) => {
        const songId = e.target.name
        const delUrl = url + songId

        axios.delete(delUrl)
        .then(() => {
            alert('Song Successfully Deleted')
            navigate('/anime-search-song/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const returnHome = () => {
        navigate('/anime-search-song/')
    }

    return (
        <>
            <button onClick={returnHome}>Return Home</button>

            <form>
                <div className='form-group'>
                    <label>Anime Name</label>
                    <input name='anime' type='text' onChange={changeUpdateState} required></input>
                </div>

                <div className='form-group'>
                    <label>Song Name</label>
                    <input name='song' type='text' onChange={changeUpdateState} required></input>
                </div>

                <div className='form-group'>
                    <label>Artists</label>
                    <input name='artist' type='text' onChange={changeUpdateState} placeholder='Enter as Comma Seperated List' required></input>
                </div>

                <div className='form-group'>
                    <label>Season Number</label>
                    <input name='season_num' type='number' min='1' onChange={changeUpdateState} required></input>
                </div>

                <div className='form-group'>
                    <label>OP Number</label>
                    <input name='op_num' type='number' min='1' onChange={changeUpdateState} required></input>
                </div>

                <div className='form-group'>
                    <label>Overall OP Number</label>
                    <input name='overall_num' type='number' min='1' onChange={changeUpdateState} required></input>
                </div>

                <div className='form-group'>
                    <label>Is Movie?</label>
                    <input name='is_movie' type='checkbox' onChange={changeUpdateStateTF}></input>
                </div>
            </form>

            <h2>Enter New Information, Then Click Update on the Target Song to Update</h2>

            <div className="song-grid">
                {songs.map((song) => (
                    <div key={song._id}>
                        <SongDisplay song={song}/>

                        <div className='button-flex'> 
                            <button name={song._id} onClick={updateClick}>Update</button>
                            <button className='delete-button' name={song._id} onClick={deleteSong}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default UpdateGrid;