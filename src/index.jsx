import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

class App extends PureComponent {
    render() {
        return (
            <div className="container">
                <h1>Hello</h1>
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root'),
)