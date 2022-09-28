import React from "react";
import styles from "./App.module.css";
import { fetchData } from "./api";
import Charts from "./component/Download/DownloadChart.jsx"
import CountryPicker from "./component/CountryPicker/CountryPicker.jsx";

class Download extends React.Component {
    state = {
        data: {},
        country: "",
    };
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    };
    render() {
        const { data, country } = this.state;
        console.log("cc",data.data)
        return (
            <div className={styles.container}>
                
                <p><b>Select Country to choose</b></p>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
            </div>
        );
    }
}
export default Download;