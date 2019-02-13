import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

export default class Timer extends PureComponent {
    constructor(props) {
        super(props);

        this.timeStart = Date.now();
        this.timerId = null;

        this.state = {
            currentTime: this.timeStart,
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({currentTime: Date.now()})
            }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.timerId);
    };

    render() {
        const {currentTime} = this.state;
        return (
            <div>
                {currentTime - this.timeStart}
            </div>
        );
    }
}
