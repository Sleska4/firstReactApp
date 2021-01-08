import React from "react";
import './post-list.css';
import PostListItem from "../post-list-item/post-list-item";


const PostList = ({posts, onDel, likes, onImportant}) =>{
    return(
        <ul className="app-list list-group">
            {posts.map(el => <PostListItem id={el.id} key={el.id} text={el.text} important={el.important} onDel={onDel}
            likes={likes} onImportant={onImportant}/>)}
        </ul>
    )
}

export default PostList