import { SECRET_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

export async function GET(requestEvent) {
	const { params } = requestEvent;
	const { location } = params;

	const response = await fetch(`${BASE_URL}?key=${SECRET_API_KEY}&q=${location}`);
	const data = await response.json();

	console.log(data);

	const info = {
		name: data.location.name,
		region: data.location.region,
		country: data.location.country,
		temp_c: data.current.temp_c,
		feelslike_c: data.current.feelslike_c,
		condition: data.current.condition.text,
		wind_kph: data.current.wind_kph
	};

	return json(info);
}
