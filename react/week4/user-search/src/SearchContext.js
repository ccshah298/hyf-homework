import { createContext, useState } from "react";
export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [input,setInput] = useState("");
    const [loading,setLoading] = useState(false);
    const [search,setSearch] = useState("");
    const [user,setUser] = useState([]);

    const valueOfContext = {
        input : input,
        setInput : setInput,
        loading : loading,
        setLoading : setLoading,
        search : search,
        setSearch : setSearch,
        user : user,
        setUser : setUser,

    };
    return(
    <SearchContext.Provider value={valueOfContext}>{children}</SearchContext.Provider>
    );
};

export default SearchProvider;