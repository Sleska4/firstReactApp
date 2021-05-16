import React from 'react';

import "./app-header.css";

const AppHeader: React.FunctionComponent = () => {
    return(
        <div className={"app-header d-flex"}>
            <h1>Sleska4</h1>
            <h2>5 записей, из них понравилось 0</h2>
        </div>
    )
}
export default AppHeader;