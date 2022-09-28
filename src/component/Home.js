import React from "react";
import Cards from "./Cards/Cards";
import Charts from "./Chart/Chart.jsx";
import CountryPicker from "./CountryPicker/CountryPicker"
import {fetchData} from "../api";
// import coronaLogo from "./images/image.png";
// import CovidDetails from "./components/covidDetails/covid";
// import gif from "./images/things.gif";
// import Lists from "./components/lists/list";
import stayHome from "../images/giphy.gif"
// import CovidSymptoms from "./components/symptoms/symptoms";
import styles from "../App.module.css"
// import DCharts from "./DownloadChart/DownloadChart.jsx";



class Home extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    console.log("country in react in didmount"+this.state.country )
    const fetchedData = await fetchData(this.state.country);
    this.setState({ data: fetchedData.data });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData.data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div>
       
        
        <div className={styles.whiteContainer}>
          <p>Select your country to know the status of COVID-19 </p>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Cards data={data} />
          <Charts data={data} country={country} />
          {/* <DCharts data={data} country={country} />
         */}
        <img src={stayHome} className={styles.stayHome} alt="stayHome" />
        <p>
          We stand with everyone standing in the frontier and fighting against the COVID-19 pandemic.{" "}
        </p>
        </div>
       
      </div>
    );
  }
}

export default Home;
