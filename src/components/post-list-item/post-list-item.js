import React, {Component} from "react";

import './post-list-item.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        }
    }

    onImportant = () =>{
        this.setState(({important}) => ({
            important: !important
        })
        )
        this.props.onImportant(this.props.id)
    }
    onLike = () =>{
        this.setState(({like}) =>({
            like: !like
        }
        ))
        this.props.likes(this.props.id)
    }

    render() {
        const {text} = this.props;
        const {important, like} = this.state;
        const {onDel} = this.props
        let classNames = "app-list-item d-flex justify-content-between";

        if(important){
            classNames += ' important'
        }
        if(like){
            classNames += ' like'
        }
        return(
            <li className="list-group-item">
                <div className={classNames}>
                <span className="app-list-item-label"
                onClick={() => this.onLike(this.props.id)}>
                    {text}
                </span>
                    <div className="d-flex justify-content-center align-items-center">
                        <button
                            type="button"
                            className="btn-star btn-sm"
                            onClick={this.onImportant}>
                            <i className="fa fa-star"></i>

                        </button>
                        <button
                            type="button"
                            className="btn-trash btn-sm"
                            onClick={() => onDel(this.props.id)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                        <i className="fa fa-heart"></i>
                    </div>
                </div>
            </li>
        )
    }
}