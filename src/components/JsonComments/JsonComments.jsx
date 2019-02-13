import './JsonComments.css';
import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

export default class JsonComments extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
        }
    }

    handleComments = (comments) => {
        this.setState((prevState) => ({
            comments: prevState.comments.concat([comments]),
        }));
    }
    render() {
        const {comments} = this.state;

        return (
            <div className="json-comments">
             <ul>
                    {comments.map((comments, idx) => <li key={idx}>{comments.author}: {comments.message}</li>)}
                </ul>
            <CommentForm onComments = {this.handleComments} /></div>
        );
    }
}
