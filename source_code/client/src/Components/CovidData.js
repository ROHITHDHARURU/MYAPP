import React from "react";
import MyCountry from "./MyCountry";

import "bootstrap/dist/css/bootstrap.css";

export class CovidData extends React.Component {
  state = { myData: "" };

  loadNews = async () => {
    const response = await fetch(
      "https://covid-193.p.rapidapi.com/statistics",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key":
            "6e76de0936msh8a577f20fccab56p17f7a5jsncbf8d503c01b",
        },
      }
    );
    const data = await response.json();
    this.setState({ myData: data });
  };
  componentDidMount() {
    this.loadNews();
  }

  render() {
    const { myData } = this.state;
    const AllCountries = myData;
    return (
      <div className="container">
        <div className="row">
          {AllCountries && AllCountries.response ? (
            AllCountries.response.map((countryItem) => (
              <MyCountry key={countryItem.country} {...countryItem} />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}

export default CovidData;