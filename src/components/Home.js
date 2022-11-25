import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import Search from "./Search";


const Home = () => {
  const loadingMessage = <h2>Data is Loading</h2>;
  const url = "https://restcountries.com/v3.1/all";
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState(null);
  const [filterd, setFilterd] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }
        return res.json();
      })
      .then((res) => {
        setIsLoading(false);
        setCountries(res);
        setFilterd(res);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);

  //function for  remove

  const removeCountry = (countri) => {
    const filter = filterd.filter((country) => {
      return country.name.common !== countri;
    });
    setFilterd(filter);
  };
  //function for search
  const searchCountry = (text) => {
    const value = text.toLowerCase();
    const SearchedCountry =
      countries &&
      countries.filter((country) => {
        const newcountry = country.name.common.toLowerCase();
        return newcountry.startsWith(value);
      });
    setFilterd(SearchedCountry);
  };

  return (
    <div>
      <h1>Country App</h1>
      <Search searchCountry={searchCountry} />
      {isLoading && loadingMessage}
      {error && <h2>404 Data not Found</h2>}
      {countries && (
        <Countries countries={filterd} removeCountry={removeCountry} />
      )}
    </div>
  );
};

export default Home;
