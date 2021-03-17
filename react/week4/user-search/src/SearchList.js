import React, { useEffect, useContext } from "react";
import { SearchContext } from "./SearchContext";

//const github_api = "https://api.github.com/search/users?q=";

function SearchList() {
    const searchingContext = useContext(SearchContext);
    const allSearcher = () => {
        if (searchingContext.input !== ""){
            searchingContext.setLoading(true);
            fetch(`https://api.github.com/search/users?q=${searchingContext.input}`)
            .then((response) => response.json())
            .then((data)=>{
                searchingContext.setLoading(false);
                if(data.search) {
                    searchingContext.setSearch(data.search);

                }
                else if (data.count === 0) {
                 searchingContext.setSearch("not found..");   
                }
                else{
                    searchingContext.setUser(data.items.map((item)=>item.login));
                }

            });
        }
    };
    
    useEffect(()=>{
        allSearcher();
    }, [searchingContext.input]);

    const handleChange = (event) => {
        searchingContext.setInput(event.target.value);
    };

    const firstPhase = () => {
        searchingContext.setInput("");
        searchingContext.setLoading(false);
        searchingContext.setUser([]);
        searchingContext.setSearch("");
        window.location.reload();
    };
    return(
        <div>
            <input
            type = "text"
            name = "search"
            id = "search"
            value = {searchingContext.input}
            onChange = {handleChange}
            />
            {searchingContext.loading ? (
                <p>load..</p>
            )
            : !searchingContext.loading && searchingContext.input !== "" &&
            searchingContext.search === "" ? (
                <ul>
                    {searchingContext.user.map((user,index)=>(
                        <li key = {index}>{user}</li>
                    ))}
                </ul>
            ) : (
                <p>{searchingContext.search}</p>
            )
            }
            <button onClick = {firstPhase}>Reload</button>
        </div>
    );
}

export default SearchList;

