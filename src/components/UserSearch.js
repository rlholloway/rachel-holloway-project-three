const UserSearch = (props) => {
    return (
        <section>
        
            <div className='wrapper'>
                <form onSubmit={props.handleSubmit}>
                    <label htmlFor="search">Search by Author</label>
                    <input type="text" id="search" onChange={props.handleInput} value={props.userInput} />
                    <button className="searchButton">Search</button>
                </form>

                <form onSubmit={props.handleGenreSubmit}>
                    <label className='genreLabel' htmlFor="genreSearch">Search by Topic</label>
                    <input type="text" id="genreSearch" onChange={props.handleGenreInput} value={props.genreInput} />
                    <button className="searchButton">Search</button>
                </form>
            </div>
        </section>
    )
}

export default UserSearch;