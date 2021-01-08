import React, {Component} from "react";
import './app.css';
import AppHeader from "../app-header/app-header";
import Search from "../search/search";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";


 export default class App extends Component{
     constructor(props) {
         super(props);
         this.state = {
             data: [
                 {text: 'Hello World', important: false, like: false, id: 1},
                 {text: 'New text', important: false, like:false, id: 2},
                 {text: 'new content', important: false, like:false, id: 3},
             ],
             filter: 'all',
             valueFilter: ''
         }
     }

     //  Delete для слабаков
    onDel = (id) =>{
         this.setState(({data}) =>{
             const arr = []
                data.forEach((el, index) => {
                    if(el.id !== id){
                        arr.push(el)
                    }
                })
             return{
                    data: arr
             }
             })
         }


     addForm = (body) => {
         const newItem = {
             text: body,
             important: false,
             id: Math.random()
         }
         this.setState(({data}) => {
             return{
                 data: [...data, newItem]
             }
         })
     }

     likes = (id) => {
         this.setState(({data}) => {
             const index = data.findIndex(elem => elem.id === id);

             const old = data[index];
             const newItem = {...old, like: !old.like};

             const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
             return {
                 data: newArr
             }
         });
     }

     onImportant = (id) => {
         this.setState(({data}) => {
             const index = data.findIndex(elem => elem.id === id);

             const old = data[index];
             const newItem = {...old, important: !old.important};

             const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
             return {
                 data: newArr
             }
         });
     }

     filterPost(items, filter) {
         if (filter === 'like') {
             return items.filter(item => item.like)
         } else {
             return items
         }
     }

     onUpdateSearch =(term) => {
         this.setState({term})
     }


     onFilterSelect = (filter) =>{
         this.setState({filter})
     }










    updateText =(text) => {
        this.setState({
            valueFilter: text
        })
    }

     searchFilter = () => {
         if(this.state.valueFilter.length === 0){
             return this.state.data
         }
         return(this.state.data.filter(el => el.text.indexOf(this.state.valueFilter) > -1))
     }


    render() {
        const {data, filter} = this.state
        const likesCounter = data.filter(el => el.like === true).length;

        const visiblePost = this.filterPost(this.searchFilter(this.state.valueFilter), filter)

        return(
        <div className="App container">
            <AppHeader count={this.state.data.length} likes={likesCounter}/>
            <div className="search-panel d-flex">
                <Search searchFilter={this.searchFilter}
                        updateText={this.updateText}/>
                <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
            </div>
            <PostList posts={visiblePost}  onDel={this.onDel} likes={this.likes} onImportant={this.onImportant}/>
            <PostAddForm addForm={this.addForm} term={this.state.term}/>
        </div>)}
}
