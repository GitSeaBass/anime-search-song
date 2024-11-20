import './SearchForm.css'

function SearchForm({searchFunc, changeSearch}) {
    return (
        <form className='search-form' onSubmit={searchFunc}>
                <input id='search' type="string" onChange={changeSearch} required></input>
                <input type="submit"></input>
        </form>
    )
}

export default SearchForm;