// Suggested code may be subject to a license. Learn more: ~LicenseLog:2797881662.
//typescript
import React, { useState } from "react";
import "./style.css";
import { SearchIcon } from "../Icons";

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  placeholder = "Search for products..",
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        id="filledInput"
        placeholder={placeholder}
        onChange={handleInputChange}
        value={query}
      />
      <SearchIcon />
    </div>
  );
};

export default SearchInput;
