import React from 'react'

import Header from "./_components/Navbar/__Header";
// import SearchAndFilter from './_components/SearchBarAndFillter/__searchAndFilter'
import CountryList from "./_components/CountryList/__CountryList";
export default function exports() {
  return (
   <>
   <Header />
        {/* <SearchAndFilter/> */}
        <CountryList />
   </>
  )
}
