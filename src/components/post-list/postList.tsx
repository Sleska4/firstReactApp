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
    onToggleImportant: Function,
    onToggleLiked: Function
}


const PostList = ({data, onDelite, onToggleImportant, onToggleLiked}: Props) => {
    const elements = data.map((elem: ElemType) => {
        const {id, ...itemProps} = elem;


        return (
            <li 
                className="list-group-item"
                key={elem.id}
            >
                <PostListItem 
                {...itemProps}
                data={elem}
                onDelite={() => onDelite(elem.id)}
                onToggleImportant={() => onToggleImportant(elem.id)}
                onToggleLiked={() => onToggleLiked(elem.id)}
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