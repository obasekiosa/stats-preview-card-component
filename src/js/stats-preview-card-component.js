'use strict';

const e = React.createElement;

class StatsPreviewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return <button onClick={() => this.setState({liked: true})}>Like</button>
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(StatsPreviewCard), domContainer);