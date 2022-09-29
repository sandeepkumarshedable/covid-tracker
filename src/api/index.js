import axios from "axios";

// const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  console.log("country display" + country.length);
  try {
    if (!country || country.length == 0) {
      console.log("global");
      return axios.get(`http://localhost:5055/covid/fetchalldata/`);
    } else return axios.get(`http://localhost:5055/covid/fetchdata/${country}`);
  } catch (error) {}
};

export const fetchDailyData = async () => {
  console.log("country dailydata display ");
  try {
    return axios.get(`http://localhost:5055/covid/fetchdailydata/`);
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    return axios.get(`http://localhost:5055/covid/fetchcountries`);
  } catch (error) {}
};
