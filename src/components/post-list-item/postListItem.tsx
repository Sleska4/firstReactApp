import React, { Component } from "react";

import "./post-list-item.css";

type ItemPropsType = {
    label: string,
    onDelite: React.MouseEventHandler,
}
type State = {
    important: boolean,
    like: boolean,
}

export default class PostListItem extends Component<ItemPropsType, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            important: false,
            like: false
        }     
    }

    onImportant = ():void => {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike = ():void => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {label} = this.props;
        const {important, like} = this.state;
        let classLi: string = "app-list-item d-flex justify-content-between"

        classLi = important ? classLi + " important": classLi;
        classLi = like ? classLi + " like" : classLi;


        return(
            <li className={classLi} >
                <span 
                    className="app-list-item-label"
                    onClick={this.onLike}
                    >{label}</span>
                <div className="d-flex justify-content-center aligen-item-center">
                    <button 
                        className="btn-star btn-sm"
                        onClick={this.onImportant}
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
                        onClick={this.onLike}
                    ></i>
                </div>
            </li>
        );
    }
}
