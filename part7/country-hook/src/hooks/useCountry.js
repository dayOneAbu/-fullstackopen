import axios from 'axios';
import { useState } from 'react';

const useCountry = () => {
	const [temperature, setTemperature] = useState({
		weather: '',
		main: '',
		wind: '',
	});
	const apiKey = process.env.REACT_APP_API_KEY;
	const getTemp = (latlng) => {
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
	};

	return {
		temperature,
		getTemp,
	};
};
export default useCountry;
