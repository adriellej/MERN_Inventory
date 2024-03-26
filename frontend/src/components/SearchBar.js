import "../css/searchBar.css"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
    return (
      <div className="search_bar_container">
        <label className="search_bar">
          <span >
            <MagnifyingGlassIcon className="search_icon"/>
          </span>
          <input 
            type="search"
            name="search"
            placeholder="Search..."
          />
        </label>
      </div>
    );
  };
  
  export default SearchBar;