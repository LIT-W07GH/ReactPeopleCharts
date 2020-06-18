import React from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import differenceInYears from 'date-fns/differenceInYears';


class AddSinglePerson extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        birthday: ''
    }

    onSubmitClick = async () => {
        const { firstName, lastName, birthday } = this.state;
        const age = differenceInYears(new Date(), birthday);
        await axios.post('/api/people/addperson', { firstName, lastName, age });
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3 well">
                    <input type="text" placeholder="First Name" className="form-control" onChange={e => this.setState({ firstName: e.target.value })} />
                    <br />
                    <input type="text" placeholder="Last Name" className="form-control" onChange={e => this.setState({ lastName: e.target.value })} />
                    <br />
                    <DatePicker
                        className="form-control"
                        placeholderText="Birthday"
                        selected={this.state.birthday}
                        onChange={date => this.setState({ birthday: date })}
                    />
                    <br />
                    <br />
                    <button className="btn btn-success btn-lg btn-block" onClick={this.onSubmitClick}>Submit</button>
                </div>
            </div>
        )
    }
}

export default AddSinglePerson;