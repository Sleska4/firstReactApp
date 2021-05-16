import React, { Component } from "react";

import "./post-list-item.css";

type ContentType = {
    label: string,
    important?: boolean,
    id: number,
    like?: boolean
  }

type ItemPropsType = {
    data: ContentType,
    label: string,
    onDelite: React.MouseEventHandler,
    onToggleImportant: React.MouseEventHandler,
    onToggleLiked: React.MouseEventHandler
}
type State = {
}

export default class PostListItem extends Component<ItemPropsType, State> {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }


    render() {
        const {label, onToggleImportant, onToggleLiked} = this.props;
        const {important, like} = this.props.data;
        let classLi: string = "app-list-item d-flex justify-content-between"

        classLi = important ? classLi + " important": classLi;
        classLi = like ? classLi + " like" : classLi;


        return(
            <li className={classLi} >
                <span 
                    className="app-list-item-label"
                    onClick={onToggleLiked}
                    >{label}</span>
                <div className="d-flex justify-content-center aligen-item-center">
                    <button 
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}
                    >
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                        className="btn-trash btn-sm"
                        onClick={this.props.onDelite}
                    
                    >
                        <i className="fa fa-trash"></i>
                    </button>
                    <i 
                        className="fa fa-heart"
                        onClick={onToggleLiked}
                    ></i>
                </div>
            </li>
        );
    }
}
