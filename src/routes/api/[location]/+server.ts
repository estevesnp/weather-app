import { SECRET_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

// TODO: Add error handling
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

export async function GET(requestEvent) {
	const { params } = requestEvent;
	const { location } = params;

	const response = await fetch(`${BASE_URL}?key=${SECRET_API_KEY}&q=${location}`);
	const data = await response.json();

	if (data.error) {
		return json(data);
	}

	const info = {
		name: data.location.name as string,
		country: data.location.country as string,
		condition: data.current.condition.text as string,
		temp_c: data.current.temp_c as number,
		wind_kph: data.current.wind_kph as number
	};

	return json(info);
}
