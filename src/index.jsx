import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

import Container from 'components/Container';

class App extends PureComponent {
    render() {
        return (
            <Container />
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root'),
)