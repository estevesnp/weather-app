<script lang="ts">
	import Form from './Form.svelte';
	import Card from './Card.svelte';

	let locations = new Map<string, any>();
</script>

<Form updateLocations={(data) => (locations = data)} {locations} />

<div class="card_display">
	{#each locations.keys() as location (location)}
		<Card location={locations.get(location)} />
	{/each}
</div>

<style>
	.card_display {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
