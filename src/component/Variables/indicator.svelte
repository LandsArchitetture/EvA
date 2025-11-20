<script>
	import { updateIndicatorValue } from '../Stores/EvA.svelte.js';
	let { name, value, indicator } = $props();
</script>

<div
	style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 1rem;"
>
	<h3 style="font-size: x-small;">{name}</h3>
	<input
		type="number"
		{name}
		{value}
		style="field-sizing: content; font-size: x-small;"
		onchange={(e) => updateIndicatorValue(indicator.name, parseInt(e.target.value))}
	/>
</div>

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
