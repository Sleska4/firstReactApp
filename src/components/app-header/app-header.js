import React from "react";
import './app-header.css';

const AppHeader = ({count, likes}) =>{
    return(<div className="app-header d-flex">
        <h1>Shumakov (Sleska4) Aleksey</h1>
        <h2>{count} записий, из них понравилось {likes}</h2>
    </div>)
}

export default AppHeader