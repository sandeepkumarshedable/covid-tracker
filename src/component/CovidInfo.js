import React from "react";
import coronaLogo from "../images/image.png"
import CovidDetails from "./CovidDetails/Covid";
import gif from "../images/things.gif"
import Lists from "./Lists/List"
import CovidSymptoms from "./Symptoms/symptoms"
import styles from "../App.module.css"

class CovidInfo extends React.Component {

   
    render() {

        return (
            <div className ={styles.container} >
                
                <img className={styles.covidLogo} src={coronaLogo} alt="covid-19" />
                <CovidDetails />
                <h2>STAY HOME, STAY SAFE <br />PLEASE FOLLOW THESE STEPS FOR PREVENTING YOURSELF FROM COVID-19 :</h2>
                <Lists />
                <img src={gif} className={styles.gif} alt="covid-gif" />
                <div className={styles.symptoms}>
                    <h2>SYMPTOMS OF COVID-19 :</h2>
                    <CovidSymptoms />
                </div>
            </div>    
        );   
    }
};


export default CovidInfo;
