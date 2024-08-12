import { createContext, useState } from "react";
export const SearchContext = createContext(null);
const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, articles, setArticles }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SearchProvider;
