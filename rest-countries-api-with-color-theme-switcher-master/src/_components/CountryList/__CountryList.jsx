// __CountryList.js
import React, { useState, useEffect } from 'react';
import CardTemplate from '../Card/CardTemplate'; // Import CardTemplate component
import SearchAndFilter from '../SearchBarAndFillter/__searchAndFilter'
export default function __CountryList() {
  const [countryData, setCountryData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/independent?status=true&fields=name,flags,continents,population,capital')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCountryData(data);
      })
      .catch((error) => {
        console.error('Error in fetch request:', error);
      });
  }, []);


  return (
    <>
     <SearchAndFilter countryData={countryData}  />
      <CardTemplate countryData={countryData} /> {/* Pass countryData as a prop */}
    </>
  );
}
