const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
};
 
export default SearchBar;