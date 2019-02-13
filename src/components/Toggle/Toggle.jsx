import './Toggle.css';

import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

export default class Toggle extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isShow: false,
        };
    }

    handleToggle = () => {
        this.setState((prevState) => ({isShow: !prevState.isShow}));
    }

    render() {
        const {isShow} = this.state;
        
        return (
            <div className="toggle">
                <button onClick={this.handleToggle}>Toggle</button>
                {isShow && <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia eaque magnam ipsum. Cum eum consequatur laudantium consectetur sint optio recusandae. Voluptatibus, sunt quasi necessitatibus corrupti delectus qui repellendus exercitationem minus!</div>}
            </div>
        );
    }
}
