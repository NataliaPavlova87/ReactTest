import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
    static propTypes = {
        onComments: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            author: '',
            message: '',
        }
    }

    handleFieldsChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        });
    }

    handleClick = () => {
        const {onComments} = this.props;
        onComments(this.state);
        this.setState ({message: ''});
    }

    render() {
        const {author, message} = this.state;

        return (
            <div>
                <input name="author" onChange={this.handleFieldsChange} value={author} placeholder="Author" type="text"/><br />
                <textarea name="message" onChange={this.handleFieldsChange} value={message} placeholder="Your message"></textarea><br />
                <button onClick ={this.handleClick}>Send</button>
            </div>
        );
    }
}
