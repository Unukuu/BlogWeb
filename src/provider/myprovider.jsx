import { createContext, useState } from "react";
export const MyContext = createContext(null);
const MyProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <MyContext.Provider
      value={{
        searchValue,
        setSearchValue,
        articles,
        setArticles,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
