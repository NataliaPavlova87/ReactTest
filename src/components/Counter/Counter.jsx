import './Counter.css';

import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

export default class Counter extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1,
        }
    }

    handlerCount = (event) => {
        const addition = event.target.name === 'plus'? 1 : -1;

        this.setState((prevState) => ({
            counter: prevState.counter + addition,
        }));
    }
    render() {
        const {counter} = this.state;
        return (
            <div className = "counter">
                <h2>Counter</h2>
                <button name="minus" onClick = {this.handlerCount}>-</button>
                {counter}
                <button name="plus" onClick = {this.handlerCount}>+</button>
            </div>
        );
    }
}
