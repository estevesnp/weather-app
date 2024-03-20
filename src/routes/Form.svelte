<script lang="ts">
	export let locations: Map<string, any>;
	export let updateLocations = (data: Map<string, any>) => {};

	let location = '';

	async function getData() {
		const response = await fetch(`/api/${location}`);
		const data = await response.json();

		return data;
	}

	// TODO: Clean up validation
	async function validateLocation() {
		const validation = {
			valid: false,
			data: {} as any,
			error: ''
		};

		if (location === '') {
			validation.error = 'Please enter a location';
			return validation;
		}

		validation.data = await getData();

		if (validation.data.error) {
			validation.error = validation.data.error.message;
			return validation;
		}

		if (!validation.data.name || !validation.data.country) {
			validation.error = 'Could not access location data. Please try again later.';
			return validation;
		}

		if (locations.has(`${validation.data.name};${validation.data.country}`)) {
			validation.error = 'Please enter a new location';
			return validation;
		}

		validation.valid = true;

		return validation;
	}

	async function handleClick() {
		const validation = await validateLocation();

		if (!validation.valid) {
			alert(validation.error);
			return;
		}

		locations.set(`${validation.data.name};${validation.data.country}`, validation.data);

		updateLocations(locations);
	}
</script>

<form>
	<input bind:value={location} type="text" placeholder="Search" />
	<button on:click={handleClick}>get info</button>
</form>
