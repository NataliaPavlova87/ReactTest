import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

import Counter from 'components/Counter';
import CommentList from 'components/CommentList';
import Toggle from 'components/Toggle';

export default function Container(props) {
        return (
            <div>
                <Counter />
                <CommentList />
                <Toggle />
            </div>
        );
}
