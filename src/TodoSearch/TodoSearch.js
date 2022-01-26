import React from "react";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    
    const getValue = (event) => {
        let value = event.target.value;
        console.log(value);
        setSearchValue(value);
    }

    return(
        <input onChange={getValue} className="search" value={searchValue} placeholder="Cebolla"></input>
    );
}

export { TodoSearch };