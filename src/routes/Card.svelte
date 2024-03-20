<script lang="ts">
	export let location = {
		name: 'Lisbon',
		country: 'Portugal',
		temp_c: 16,
		condition: 'Partly cloudy',
		wind_kph: 20.2
	};
</script>

<div class="card">
	<h1>{location.name}</h1>
	<p>{location.country}</p>
	<p>{location.condition}</p>
	<p>Temperature: {location.temp_c} C</p>
	<p>Wind Km/H: {location.wind_kph}</p>
</div>

<style>
	.card {
		max-width: 250px;
		flex: 1 0 20%;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 20px;
		margin-right: 50px;
		margin-top: 5px;
		margin-bottom: 20px;
		box-sizing: border-box;
	}

	.card h1 {
		font-size: 24px;
		margin-bottom: 10px;
	}

	.card p {
		margin: 5px 0;
	}
</style>
