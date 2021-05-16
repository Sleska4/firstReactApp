import React, { Component } from 'react';
import './App.css';

import {AppHeader} from "./components/app-header/";
import {Search} from "./components/search/";
import {PostFilter} from "./components/post-filter/"
import {PostList} from "./components/post-list";
import {PostAdd} from "./components/post-add"

type ItemPropsType = {
}

type ContentType = {
  label: string,
  important?: boolean,
  id: number
}

type State = {
  data: ContentType[]
}

export default class App extends Component<ItemPropsType, State> {
  constructor(props: any){
    super(props)
    this.state = {
      data: [
        {label: "Text #1", important: false, id: 12321312676879},
        {label: "Text #2", important: true, id: 2465463453465},
        {label: "Text #3", important: false, id: 35634556465465},
      ]
    }
  }

  deliteItem = (id:number):void =>{

    this.setState(({data}) => {

      const index: number = this.state.data.findIndex(elem => elem.id === id);
      const newData: ContentType[] = [...data.slice(0, index), ...data.slice(index + 1)];

      return{
        data: newData
      }

    })
  }

  render(){
    return (
      <div className="container">
          <header>
              <AppHeader/>
              <div className={"d-flex"}>
                  <Search/>
                  <PostFilter/>
              </div>
          </header>
          <section>
            <PostList 
              data={this.state.data}
              onDelite={this.deliteItem}
              />
            <PostAdd/>
          </section>
      </div>
    );
  }
}