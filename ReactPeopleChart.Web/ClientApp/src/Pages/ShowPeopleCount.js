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
        const { count } = this.state;
        return (
            <div>
                {count !== 0 && <h1 style={{ fontSize: 300 }}>{count}</h1>}
                {count === 0 && <h2>Loading.....</h2>}
            </div>
        )
    }
}

export default ShowPeopleCount;