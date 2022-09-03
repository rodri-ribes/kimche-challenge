import React, { useEffect, useState } from "react";
import "./App.scss";
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import Footer from './components/Footer/Footer.js'

// ---------- Components ----------

import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import Select from "./components/Select/Select";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com/'
});

const App = () => {

  const QUERY = gql`
  {
    countries {
      name
      native
      phone
      capital
      emoji
      currency
      continent { 
        code
        name
      }
      languages {
        code
        name
      }
    }
  }`;

  const { data } = useQuery(QUERY, { client });

  const [countries, setCountries] = useState(false)

  useEffect(() => {
    setCountries(data?.countries)
  }, [data, countries])

  // // --------- logic of search ---------

  const [search, setSearch] = useState("")
  const [searchCountry, setSearchCountry] = useState([])

  function searchFilter(search) {
    return function (x) {
      return x.name.toLowerCase().includes(search.toLowerCase()) || !search
    }
  }

  useEffect(() => {
    if (countries) setSearchCountry(countries)
    console.log(countries)
  }, [countries])

  //--------- logic of Component ---------

  const [button, setButton] = useState("continent")

  const changeButton = (e) => {
    setButton(e.target.name)
  }

  return (
    <>
      <div className="container">
        <div className="container__content">
          <h1>Country Search</h1>
          <p>What country do you want to search?</p>
        </div>
        <Search setSearch={setSearch} />
        <Select changeButton={changeButton} button={button} />
        <Home search={search} searchCountry={searchCountry} searchFilter={searchFilter} button={button} />
      </div>
      <Footer />
    </>
  )
}




export default App;
