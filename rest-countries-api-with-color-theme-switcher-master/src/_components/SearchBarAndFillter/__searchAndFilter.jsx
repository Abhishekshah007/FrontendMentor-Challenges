// __searchAndFilter.js
import React, { useState } from "react";
import "../SearchBarAndFillter/__styling.css";
import CardTemplate from "../Card/CardTemplate";

export default function __searchAndFilter(PropsData) {
  const { countryData } = PropsData;
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const searchItem = e.target.value;
    setSearchTerm(searchItem);
    filterCountries(searchItem, regionFilter);
  };

  const handleRegionFilter = (e) => {
    const selectedRegion = e.target.value;
    setRegionFilter(selectedRegion);
    filterCountries(searchTerm, selectedRegion);
  };

  const filterCountries = (searchText, region) => {
    const filteredCountries = countryData.filter((country) => {
      const nameMatches = country.name.common
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const regionMatches =
        region === "" || country.continents.includes(region);
      return nameMatches && regionMatches;
    });
    setSearchResults(filteredCountries);
  };

  return (
    <>
      <div className="container">
        <div className="searchBox">
          <ion-icon name="search-outline" id="search-icon"></ion-icon>
          <input
            type="text"
            placeholder="   Search for a country"
            onChange={handleSearch}
            value={searchTerm}
          />
        </div>

        <div className="filterBox">
          <select
            name="country"
            id="countryFilter"
            title="Filter By Region"
            onChange={handleRegionFilter}
            value={regionFilter}
          >
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <CardTemplate countryData={searchResults} />
    </>
  );
}
