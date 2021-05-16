import React, {Component} from "react";
import "./post-add-form.css";


type Props = {
    onAdd: Function
}

type State = {
    text: string,
}

export default class PostAdd extends Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {
            text: ""
        }
    }

    onInput = (e: any):void => {
        this.setState(({text}) => {
            const value = e.target.value
            return{
                text: value
            }
        })
    }

    onSubmit = () => {
        this.props.onAdd(this.state.text);
        this.setState(({text}) => {
            return{
                text: ""
            }
        })
    }

    render(){

        return(
            <form
                action="#"
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
                >
                <input 
                    type="text"
                    placeholder="О чём вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onInput}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить</button>    
                </form>
        )
    }
}
