import React, {Component} from 'react'

class State extends Component{
    constructor(props){
        super(props);
        this.state = {
            initialState : 0,
            stateNow : 0
        }
    }

    render(){
        return (
            <div>
                {this.state.initialState}, {this.state.stateNow}
            </div>
        )
    }

}
export default State;