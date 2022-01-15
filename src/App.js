import React, { useEffect, useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Container,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");


  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
         
        const countries = data.map((country) => (
          {
            name: country.country, //United States, China
            value: country.countryInfo.iso2, // UK, USA, FR
          }));

          setCountries(countries);
      });
    };

    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    
    <div className="app"> 
      <div className="app__header">
      <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map(country =>(
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))}

          </Select>
        </FormControl>
      </div>
      
      <div className="app__stats">

        <InfoBox title="Coronavirus Cases"cases={2} total={3} />

        <InfoBox title="Recovered"cases={2} total={3} />

        <InfoBox title="Deaths" cases={2} total={312} />

      </div>
      

  

      {/* InfoBoxs */}
      {/* InfoBoxs */}
      {/* InfoBoxs */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
  
    </div>
  );
}

export default App;
