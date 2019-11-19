import React, {useState, useRef} from "react";
import PropTypes from "prop-types";
import MagnifyingGlassIcon from "../icons/MagnifyingGlassIcon";
import "./SearchBar.scss";

const SearchBar = ({handleUserQuery}) => {
    let [query, setQuery] = useState("");

    const timeoutRef = useRef();

    const handleSearchInput = event => {
        const newQuery = event.target.value.trim();
        // save search input to component state
        setQuery(newQuery);
        // clear previous timeout if new keyboard input within short timespan (e.g. under 300ms)
        clearTimeout(timeoutRef.current);
        // set timeout to delay saving user input to Redux store to prevent overly frequent store calls
        timeoutRef.current = setTimeout(() => handleUserQuery(newQuery), 300);
    };

    const handleSubmit = event => {
        event.preventDefault();
        handleUserQuery(query);
    };

    return (
        <form className="searchbar-form" onSubmit={handleSubmit}>
            <label className="searchbar-label">
                <input
                    type="search"
                    className="searchbar-input"
                    placeholder="product keyword..."
                    value={query}
                    onChange={handleSearchInput}
                />
                <MagnifyingGlassIcon />
            </label>
        </form>
    );
};

SearchBar.propTypes = {
    handleUserQuery: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
    // handleUserQuery: () => console.error("ERROR: required 'handleUserQuery' argument missing")
};

export default SearchBar;
