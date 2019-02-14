import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

import Counter from 'components/Counter';
import CommentList from 'components/CommentList';
import Toggle from 'components/Toggle';
import TimerShow from 'components/TimerShow';
import JsonCommentsContainers from 'containers/JsonCommentsContainers';


export default function Container(props) {
        return (
            <div>
                <Counter />
                <CommentList />
                <Toggle />
                <TimerShow />
                <JsonCommentsContainers />
            </div>
        );
}
