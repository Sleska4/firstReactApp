import React from "react";

import "./post-status-filter.css";

const PostFilter: React.FunctionComponent = () => {
    return(
        <div className={"btn-group"}>
            <button className="btn btn-info">Все</button>
            <button className="btn btn-outline-secondary">Понравилось</button>
        </div>
    )
}

export default PostFilter;