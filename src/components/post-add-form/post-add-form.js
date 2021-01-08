import React, {Component} from "react";
import './post-add-form.css';

export default class PostAddForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            text: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addForm(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
    return(
        <form
            onSubmit={this.onSubmit}
            className="bottom-panel d-flex">

            <input type="text"
                   onChange={this.onValueChange}
                   value={this.state.text}
            placeholder="О чём вы думаете сейчас"
            className="form-control new-post-label"/>
            <button
                // type="submit"
                className="btn btn-outline-secondary">
                Добавить
            </button>
        </form>
    )}
}