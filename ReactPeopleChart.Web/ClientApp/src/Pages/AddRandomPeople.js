import React from 'react';
import axios from 'axios';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import "bootstrap-slider/dist/css/bootstrap-slider.css"

class AddRandomPeople extends React.Component {

    state = {
        amount: 0,
        ageRange: [0, 200]
    }

    onAmountSliderStop = e => {
        this.setState({ amount: e.target.value });
    }

    onAgeRangeSliderStop = e => {
        this.setState({ ageRange: e.target.value });
    }

    onSubmitClick = async () => {
        const { amount } = this.state;
        const [minAge, maxAge] = this.state.ageRange;
        await axios.post('/api/people/addrandompeople', { amount, minAge, maxAge });
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3 well">
                    <h3>Amount to generate:</h3>
                    <ReactBootstrapSlider
                        value={this.state.amount}
                        slideStop={this.onAmountSliderStop}
                        max={100}
                        min={1} />
                    <br />
                    <h3>Age Range</h3>

                    <ReactBootstrapSlider
                        value={this.state.ageRange}
                        slideStop={this.onAgeRangeSliderStop}
                        max={200}
                        min={1} />
                    <br />
                    <br />
                    <button className="btn btn-primary btn-lg btn-block" onClick={this.onSubmitClick}>Submit</button>
                </div>
            </div>
        )
    }
}

export default AddRandomPeople;