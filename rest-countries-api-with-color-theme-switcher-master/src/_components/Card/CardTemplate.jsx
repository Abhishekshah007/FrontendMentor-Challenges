// CardTemplate.js
import React from "react";
import "../Card/styling.css";
import { Link } from "react-router-dom";

export default function CardTemplate(props) {
  const { countryData } = props;

  if (!countryData || countryData.length === 0) {
    return <div></div>;
  }

  return (
    <>
      <div className="cardContainer">
        {countryData.map((country, index) => (
          <div className="cardItem" key={index}>
            <Link to={`/country/${country.name.common}`} key={index}>
              <div className="imgContainer">
                <img src={country.flags.png} alt={country.name.common} />
              </div>
              <div className="countryData">
                <h3>{country.name.common}</h3>
                <p>
                  <span>Population: </span>
                  {country.population}
                </p>
                <p>
                  <span>Region: </span>
                  {country.continents}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
