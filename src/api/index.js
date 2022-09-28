import axios from "axios";

// const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) =>
 { console.log("country display"+country.length)
 
 if (!country || country.length == 0) {
 console.log("global")  
 return axios.get(`http://localhost:5065/covid/fetchalldata/`)
 }
 else
  return axios.get(`http://localhost:5065/covid/fetchdata/${country}`)
 
};



export const fetchDailyData = async () => {
  console.log("country dailydata display ")
  return axios.get(`http://localhost:5065/covid/fetchdailydata/`)
};


export const fetchCountries = async () => {
    return axios.get(`http://localhost:5065/covid/fetchcountries`)
};

