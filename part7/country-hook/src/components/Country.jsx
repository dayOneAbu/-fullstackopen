import { useEffect } from 'react';
import useCountry from '../hooks/useCountry';
function Country({ countryData }) {
	const country = countryData[0];
	const languages = Object.values(country?.languages);
	const { temperature, getTemp } = useCountry(country);
	useEffect(() => {
		getTemp(country.latlng);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [country.latlng]);
	return (
		<div>
			<section>
				<h1>{country.name?.common}</h1>
				<p>
					capital:{' '}
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
				<img src={country.flags?.png} alt='' />
			</section>
			<section>
				<h2>weather in {country.name?.common}</h2>
				<p>temperature {temperature?.main} Celsius</p>
				<img
					src={`http://openweathermap.org/img/wn/${temperature?.weather}@2x.png`}
					alt=''
				/>
				<p>wind {temperature?.wind} m/s</p>
			</section>
		</div>
	);
}
export default Country;
