import React, { PureComponent, Fragment } from 'react';

import JsonComments from 'components/JsonComments';

export default class JsonCommentsContainers extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            comments: [],
            page: 0,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const {page} = this.state;
        this.setState({loading: true});

        fetch(`https://jsonplaceholder.typicode.com/comments?_limit=3&_page=${page}`)
        .then((response) => response.json())
        .then((_comments) => {
            this.setState((prevState) => ({
                ...prevState,
                loading: false,
                comments: prevState.comments.concat(_comments),
                page: prevState.page + 1,
            }))
        });
    };
    render() {
        const {loading, comments} = this.state;
        return (
            <Fragment>
                {comments.length === 0 ? 'Loading...' : <JsonComments comments={comments} loading={loading} onLoadMore={this.fetchData} />}
            </Fragment>
        );
    }
}
