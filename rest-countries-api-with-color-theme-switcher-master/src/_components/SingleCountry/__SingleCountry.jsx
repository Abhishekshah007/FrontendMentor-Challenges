import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Navbar/__Header";
import SearchAndFilter from "../SearchBarAndFillter/__searchAndFilter";
import data from "../../assets/data.json";
import "./styling.css"; // External CSS file for styling

export default function SingleCountry() {
  const { id } = useParams();
  const [singleCountry, setSingleCountry] = useState(null);

  useEffect(() => {
    // Find the country in the data array that matches the id
    const foundCountry = data.find((country) => country.name === id);

    // Set the found country in state
    if (foundCountry) {
      setSingleCountry(foundCountry);
    }
  }, [id]);

  return (
    <>
      <Header />
      <SearchAndFilter />

      {singleCountry ? (
        <div className="single-container">
          <div className="img-container">
            <img
              src={singleCountry.flags.png}
              alt={singleCountry.name.common}
              className="country-flag"
            />
          </div>
          <div className="country-data">
            <h3>{singleCountry.name.common}</h3>
            <p>
              <span>Population: </span>
              {singleCountry.population}
            </p>
            <p>
              <span>Region: </span>
              {singleCountry.continents}
            </p>
            <p>
              <span>Capital: </span>
              {singleCountry.capital}
            </p>
          </div>
        </div>
      ) : (
        <p>Country not found.</p>
      )}
    </>
  );
}
