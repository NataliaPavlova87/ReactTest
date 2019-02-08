import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

import Counter from 'components/Counter';
import CommentList from 'components/CommentList';

export default function Container(props) {
        return (
            <div>
                <Counter />
                <CommentList />
            </div>
        );
}
