<script>
	import Indicator from './indicator.svelte';
	let { name, value, color, category } = $props();
</script>

<div
	style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 1rem;"
>
	<h2 style="font-size: medium;">{name}</h2>
	<input type="number" {name} {value} style="field-sizing: content; font-size: medium;" />
</div>
{#each category.indicators as ind}
	<Indicator name={ind.name} value={ind.value} color={ind.color} indicator={ind} />
{/each}

<style>
	/* Remove spinner buttons */
	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	/* Remove outline on focus */
	input[type='number']:focus {
		outline: none;
	}
</style>
