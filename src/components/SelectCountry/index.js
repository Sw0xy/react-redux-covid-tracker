import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import {
  errorSelector,
  fetchData,
  fetchCountries,
  setCountry,
} from "../../redux/covidSlice";
function SelectCountry() {
  const dispatch = useDispatch();
  const error = useSelector(errorSelector);
  const countries = useSelector((state) => state.covid.countries);
  const data = useSelector((state) => state.covid.data);


  const handleChange = (e) => {
    dispatch(fetchData(e.target.value));
    const country = e.target.value;
    dispatch(setCountry(country));
  };


  useEffect(() => {
    
    dispatch(fetchCountries());
    dispatch(fetchData('Algeria'));
  }, [dispatch]);

  console.log(countries, data);

  if (error !== null) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <div className={styles.header}>
        <h1>COVID-19 CORONAVIRUS PANDEMIC</h1>
        <span>(For a Particular country, select a Country from below)</span>
      </div>
      <div className={styles.select__container}>
        <select
          id="favorite"
          name="favorite"
          required=""
          onChange={(e) => handleChange(e)}
        >
          <option value="France">Select Country</option>
          {countries.map((country, key) => (
            <option key={key} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    
    </div>
  );
}

export default SelectCountry;
