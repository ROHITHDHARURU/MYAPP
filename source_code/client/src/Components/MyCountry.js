import { Component } from "react";

class MyCountry extends Component {
  render() {
    const countryItem = this.props;
    return (
      
      <ul className="col-sm-3 card">
        <div className="card-body">
          <h5 className="card-title">{countryItem.country}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Total Cases: {countryItem.cases.total}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            New Cases: {countryItem.cases.new}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Active Cases: {countryItem.cases.active}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Critical Cases: {countryItem.cases.critical}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Recovered Cases: {countryItem.cases.recovered}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Total Deaths: {countryItem.deaths.total}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            New Deaths: {countryItem.deaths.new}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Total Tests: {countryItem.tests.total}
          </h6>
        </div>
      </ul>
      
    );
  }
}
export default MyCountry;