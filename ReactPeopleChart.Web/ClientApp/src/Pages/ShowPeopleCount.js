import React from 'react';
import axios from 'axios';

class ShowPeopleCount extends React.Component {
    state = {
        count: 0
    }

    componentDidMount = async () => {
        const { data } = await axios.get('/api/people/getall');
        this.setState({ count: data.length });
    }

    render() {
        return (
            <div>
                <h2>Current person count:</h2>
                <h1 style={{ fontSize: 300 }}>{this.state.count}</h1>
            </div>
        )
    }
}

export default ShowPeopleCount;