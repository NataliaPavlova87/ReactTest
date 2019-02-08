import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

import CommentForm from 'components/CommentForm';

export default class CommentList extends PureComponent {
    render() {
        return (
            <CommentForm />
        );
    }
}
