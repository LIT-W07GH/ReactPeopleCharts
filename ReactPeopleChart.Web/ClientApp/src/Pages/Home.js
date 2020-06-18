import React from 'react';
import axios from 'axios';
import PeopleAgeChart from '../components/PeopleAgeChart';

class Home extends React.Component {

    state = {
        people: [],
        showChart: false
    }

    componentDidMount = async () => {
        const { data } = await axios.get('/api/people/getall');
        this.setState({ people: data });
    }

    toggleAgeChart = () => {
        const { showChart } = this.state;
        this.setState({ showChart: !showChart });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <button className="btn btn-primary btn-lg btn-block" onClick={this.toggleAgeChart}>Toggle Age Chart</button>
                    {this.state.showChart && <div style={{ height: 850 }}>
                        <PeopleAgeChart people={this.state.people} />
                    </div>}
                    <table className="table table-hover table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...this.state.people].sort((a,b) => a.age - b.age).map(p => <tr key={p.id}>
                                <td>{p.firstName}</td>
                                <td>{p.lastName}</td>
                                <td>{p.age}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Home;