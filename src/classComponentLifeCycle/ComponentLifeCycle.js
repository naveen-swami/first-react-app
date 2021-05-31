import React, { Component } from "react";

class ComponentLifeCycle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            noOfStudnet: 2
        }
    }

    //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount() {  // componet has rendered
        { console.log("componet did mount"); }

        setTimeout(() => {
            this.setState({ ...this.state, noOfStudnet: 5 })
        }, 4000)
    }

    //Called to determine whether the change in props and state should trigger a re-render.
    shouldComponentUpdate() {
        console.log("inside should component update");
        // this.setState({ ...this.state, noOfStudnet: 5 }) // gives error
        return true;
    }

    //Called immediately before a component is destroyed.
    componentWillUnmount() { // componet will be removed (unmount => remove from DOM)
        console.log("componet will unmount");
    }

    render() {
        { console.log("redenring") }
        return (
            <div>
                <h1>Total Studnet: {this.state.noOfStudnet}</h1>
                <button onClick={this.props.backToHome}>go to Home</button>
            </div>
        )
    }
}

export default ComponentLifeCycle;