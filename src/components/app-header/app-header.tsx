import React, {Component} from 'react';

import "./app-header.css";


type State = {
  }

type ItemPropsType = {
      count: number,
      liked: number
}

export default class AppHeader extends Component<ItemPropsType, State>{
    constructor(props: ItemPropsType){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className={"app-header d-flex"}>
                <h1>Sleska4</h1>
                <h2>{this.props.count} записей, из них понравилось {this.props.liked}</h2>
            </div>
        )
    }
}