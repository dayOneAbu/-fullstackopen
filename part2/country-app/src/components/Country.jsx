import { useEffect, useState } from "react";
import axios from "axios";
function Country({ countryData }) {
  const country = countryData[0];
  const languages = Object.values(country?.languages);
  const [latlng, setLatlng] = useState(country.latlng);
  const [temperature, setTemperature] = useState({
    weather: "",
    main: "",
    wind: "",
  });
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${apiKey}`
      )
      .then((res) => {
        const { weather, main, wind } = res.data;
        setTemperature((prev) => {
          return {
            weather: weather[0].icon,
            main: main.temp,
            wind: wind.speed,
          };
        });
      })
      .catch((err) => console.log(err.message));
  }, [latlng]);

  return (
    <div>
      <section>
        <h1>{country.name?.common}</h1>
        <p>
          capital:{" "}
          {country?.capital.map((item) => (
            <span key={item}>{item} </span>
          ))}
          <br />
          Area: {country?.area}
        </p>
        <h3>Languages:</h3>
        <ul>
          {languages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
        <img src={country.flags?.png} alt="" />
      </section>
      <section>
        <h2>weather in {country.name?.common}</h2>
        <p>temperature {temperature?.main} Celsius</p>
        <img
          src={`http://openweathermap.org/img/wn/${temperature?.weather}@2x.png`}
          alt=""
        />
        <p>wind {temperature?.wind} m/s</p>
      </section>
    </div>
  );
}
export default Country;
