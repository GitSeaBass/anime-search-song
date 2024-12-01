import './SongDisplay.css'

function SongDisplay({ song }) {
    const animeSplit = song.anime.split(',')
    
    return (
        <div className='list-item'>
            <hr />

            <div className='song-info-flex-container'>
                <div className='anime-info'>
                    <h2 className='info-header'>{animeSplit[0]}</h2>
                    <h3 className='info-header extra-info'>Season {song.season_num} OP {song.op_num} ({song.overall_num})</h3>
                    <h4 className='info-header extra-info alt-names' id='anime-names'>{song.anime}</h4>
                </div>

                <div className='song-info'>
                    <h2 className='info-header'>{song.song}</h2>
                    <h4 className='info-header'>{song.artist}</h4>
                </div>
            </div>
        </div>
    )
}

export default SongDisplay;