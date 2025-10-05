<script>
	import Category from './category.svelte';
	let { name, value, base, test } = $props();
</script>

<div style="display: flex; flex-direction: column; align-items: start;">
	<div
		style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 1rem;"
	>
		<h1 style="font-size: x-large; font-weight: bold;">{name}</h1>
		<input
			type="number"
			{name}
			{value}
			style="font-size: x-large; field-sizing: content;"
			onchange={(e) => {
				test += 1;
				console.log('changed', e.target.value);
			}}
		/>
	</div>
	{#each base.categories as cat}
		<Category name={cat.name} value={cat.value} color={cat.color} category={cat} />
	{/each}
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
