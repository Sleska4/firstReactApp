import React from "react";

import "./search-panel.css";

const Search: React.FunctionComponent = () => {
    return(
        <input
            className={"form-control search-input search"}
            type="text"
            placeholder="Поиск по записям"
        />
    )
}

export default Search;