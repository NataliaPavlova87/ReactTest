import './JsonComments.css';
import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

export default function JsonComments (props) {
        const {comments, loading, onLoadMore} = props;
        return (
            <div className="json-comments">
                <ul>
                    {comments.map((comments, idx) => <li key={comments.id}><strong>{comments.name}:</strong> {comments.body}</li>)}
                </ul>
                <button onClick={onLoadMore} disabled={loading}>Load More</button>
            </div>
        );
}

JsonComments.propTypes = {
    comments: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onLoadMore: PropTypes.func.isRequired,
}