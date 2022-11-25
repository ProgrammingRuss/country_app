import React from "react";
import style from "./style.module.css";
const Country = (props) => {
  const { removeCountry } = props;
  const { country } = props;
  const { name, flags, population, capital, area } = country;
  const handleClick = (e) => {
    removeCountry(name.common);
  };
  return (
    <div className={style.card}>
      <div className={style.country}>
        <img src={flags.png} alt="" />
        <div className={style.info}>
          <h2>
            <span>{name.common}</span>
          </h2>
          <p>
            Capital: <span>{capital}</span>
          </p>
          <p>
            Area: <span>{area}</span> km²
          </p>
          <p>
            Population: <span>{population}</span>
          </p>
        </div>
        <button onClick={handleClick}>Remove</button>
      </div>
    </div>
  );
};

export default Country;
