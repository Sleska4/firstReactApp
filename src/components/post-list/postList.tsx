import React from "react";

import {PostListItem} from "../post-list-item";

import "./post-list.css";

type ElemType = {
    label: string,
    important?: boolean,
    id: number
}

type Props = {
    data: ElemType[],
    onDelite: Function,
}


const PostList = ({data, onDelite}: Props) => {
    const elements = data.map((elem: ElemType) => {
        const {id, ...itemProps} = elem;


        return (
            <li 
                className="list-group-item"
                key={elem.id}
            >
                <PostListItem 
                {...itemProps}
                onDelite={() => onDelite(elem.id)}
                />
            </li>
        )
    })

    return(
        <ul className={"app-listy list-group"}>
            {elements}
        </ul>
    );
}

export default PostList;