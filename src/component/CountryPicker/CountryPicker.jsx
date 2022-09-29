import React,{useState, useEffect} from "react";
import {NativeSelect, FormControl} from "@material-ui/core"
import Styles from "../CountryPicker/CountryPicker.module.css"
import {fetchCountries} from "../../api/index"


const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]) 

    useEffect(() => {  
        const fetchAPI = async () => {
            try {
            console.log("fff",fetchCountries());
            setFetchedCountries(await fetchCountries());
        } catch (error) {
                
        }
        };

        fetchAPI();
    }, [setFetchedCountries]);

   console.log("fet",fetchedCountries)
    

    return(
        <FormControl className={Styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
                <option value="">Global</option>
                {fetchedCountries?.data?.map((country, i) => <option key={i} value={country} >{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
};


export default CountryPicker;