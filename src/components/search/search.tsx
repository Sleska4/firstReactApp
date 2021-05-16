import React from "react";

import "./search-panel.css";

type Props = {
    onSearch: React.ChangeEventHandler
}

const Search = ({onSearch}: Props) => {
    return(
        <input
            className={"form-control search-input search"}
            type="text"
            placeholder="Поиск по записям"
            onChange={onSearch}
        />
    )
}

export default Search;