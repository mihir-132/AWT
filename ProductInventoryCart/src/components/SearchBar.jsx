function SearchBar({ search, setSearch }) {
    return (
        <div>
            <label htmlFor="search">Search Products: </label>

            <input
                id="search"
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Enter product name..."
            />
        </div>
    );
}

export default SearchBar;