import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";
import style from "./style.module.css";
const Countries = (props) => {
  const { countries } = props;
  const { removeCountry } = props;
  return (
    <div className={style.grid}>
      {countries.map((country) => {
        const countri = { country, id: uuidv4() };
        return (
          <Country
            country={country}
            key={countri.id}
            removeCountry={removeCountry}
          />
        );
      })}
    </div>
  );
};

export default Countries;
