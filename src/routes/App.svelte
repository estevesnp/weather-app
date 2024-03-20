<script lang="ts">
	async function handleClick() {
		const response = await fetch('/api/lisbon');
		const data = await response.json();

		console.log(data);
	}
</script>

<button on:click={handleClick}>click me</button>