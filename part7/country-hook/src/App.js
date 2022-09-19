import axios from 'axios';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

function App() {
	const [countries, setCountries] = useState([]);
	const handelSearch = (e) => {
		axios
			.get(
				`https://restcountries.com/v3.1/name/${e.target.value}?fields=name,capital,area,languages,flags,latlng`
			)
			.then((res) => setCountries(res.data));
	};
	const handleShow = (data) => {
		setCountries((prev) => {
			return [data];
		});
	};

	return (
		<div className='App'>
			<SearchBar handelSearch={handelSearch} />
			{countries.length > 10 ? (
				<p>Too many matches, specify another filter</p>
			) : (
				<SearchResult onClick={handleShow} countries={countries} />
			)}
		</div>
	);
}

export default App;
