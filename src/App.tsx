import React, { Component } from 'react';
import './App.css';
import {idGenerate} from "./myLibs/sleska4"

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
  id: number,
  like?: boolean
}

type State = {
  data: ContentType[],
  IDs: number[],
  term: string
}

export default class App extends Component<ItemPropsType, State> {
  constructor(props: any){
    super(props)
    this.state = {
      data: [
        {label: "Text #1", important: false, id: 12321312676879, like: false},
        {label: "Text #2", important: true, id: 2465463453465, like: false},
        {label: "Text #3", important: false, id: 35634556465465, like: false},
      ],
      IDs: [12321312676879, 2465463453465, 35634556465465],
      term: "",
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

  addItem = (text: string):void => {
      this.setState(({data, IDs}) => {
        const newId = idGenerate(IDs)
        const newItem: ContentType = {
          label: text,
          important: false,
          id: newId
        }

        const newData: ContentType[] = [...data, newItem];
        const ID: number[] = [...IDs, newId];

        return{
          data: newData,
          IDs: ID
        }
      })
  }

  onToggleImportant = (id: number) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const oldElem: ContentType = data[index];
      const newElem: ContentType = {...oldElem, important: !oldElem.important}
      const newData: ContentType[] = [...data.slice(0, index), newElem, ...data.slice(index + 1)];
      return{
        data: newData
      }
    })
  }
  onToggleLiked = (id: number) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const oldElem: ContentType = data[index];
      const newElem: ContentType = {...oldElem, like: !oldElem.like}
      const newData: ContentType[] = [...data.slice(0, index), newElem, ...data.slice(index + 1)];
      return{
        data: newData
      }
    })
  }
  onSearch = (e: any) => {
    this.setState(({term}) => {
      const newTerm = e.target.value.toLowerCase();
      return{
        term: newTerm
      } 
    })
  }

  render(){
    const {data, term} = this.state;

    const liked: number = data.filter(el => el.like).length
    const count: number = data.length

    const dataFilter = data.filter(el => (el.label.toLowerCase().indexOf(term) > -1))

    return (
      <div className="container">
          <header>
              <AppHeader
                count={count}
                liked= {liked}
              />
              <div className={"d-flex"}>
                  <Search
                    onSearch={this.onSearch}
                  />
                  <PostFilter/>
              </div>
          </header>
          <section>
            <PostList 
              data={dataFilter}
              onDelite={this.deliteItem}
              onToggleImportant={this.onToggleImportant}
              onToggleLiked={this.onToggleLiked}
              />
            <PostAdd
              onAdd={this.addItem}
            />
          </section>
      </div>
    );
  }
}