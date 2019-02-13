import './TimerShow.css';
import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import Timer from 'components/Timer';

export default class TimerShow extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isShow: false,
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({isShow: !prevState.isShow}));
    }

    render() {
        const {isShow} = this.state;

        return (
            <div className="timer-show">
            <button onClick={this.handleClick}>Timer</button>
                {isShow && <Timer />}
            </div>
        );
    }
}
