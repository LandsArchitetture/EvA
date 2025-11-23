<script>
	import Clock from './WatchFaces/clock.svelte';
	import EvaFace from './WatchFaces/Eva.svelte';
	import Axis from './WatchFaces/axis.svelte';
	import Box from './WatchFaces/box.svelte';
	export let Eva;

	let currentLayer = 'bases';
	let currentShift = Eva.value / 1000;
	let selectedBase = null;
	let selectedColor = '';

	let isMouseDown = false;
	let isDragging = false;
	let startX = 0;
	let startShift = 0;

	const categoryColors = ['blue', 'yellow', 'green', 'red'];

	function handleBaseTouch() {
		if (isDragging) return;
		currentLayer = 'categories';
		if (Eva.bases && Eva.bases.length > 0) {
			const values = Eva.bases.map((b) => b.value);
			const min = Math.min(...values);
			const max = Math.max(...values);
			const avg = (min + max) / 2;
			currentShift = avg / 1000;
		}
	}

	function handleCategoryTouch(base, color) {
		if (isDragging) return;
		selectedBase = base;
		selectedColor = color;
		currentLayer = 'indicators';
		if (base.categories && base.categories.length > 0) {
			const values = base.categories.map((c) => c.value);
			const min = Math.min(...values);
			const max = Math.max(...values);
			const avg = (min + max) / 2;
			currentShift = avg / 1000;
		}
	}

	function handleMouseDown(e) {
		isMouseDown = true;
		isDragging = false;
		startX = e.clientX || e.touches[0].clientX;
		startShift = currentShift;
	}

	function handleMouseMove(e) {
		if (!isMouseDown) return;

		const clientX = e.clientX || e.touches[0].clientX;
		const deltaX = clientX - startX;

		if (Math.abs(deltaX) > 5) {
			isDragging = true;
		}

		if (!isDragging) return;

		const pixelsPerRem = 16;
		const shiftChange = deltaX / (pixelsPerRem * 10);
		currentShift = startShift - shiftChange;
	}

	function handleMouseUp() {
		isMouseDown = false;
		setTimeout(() => {
			isDragging = false;
		}, 0);
	}

	function handleBackgroundClick() {
		if (isDragging) return;

		if (currentLayer === 'indicators') {
			currentLayer = 'categories';
			selectedBase = null;
			// Restore shift for categories (bases view)
			if (Eva.bases && Eva.bases.length > 0) {
				const values = Eva.bases.map((b) => b.value);
				const min = Math.min(...values);
				const max = Math.max(...values);
				const avg = (min + max) / 2;
				currentShift = avg / 1000;
			}
		} else if (currentLayer === 'categories') {
			currentLayer = 'bases';
			currentShift = Eva.value / 1000;
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="relative aspect-square w-1/3 cursor-grab touch-none overflow-hidden rounded-full bg-gray-200 shadow-xl active:cursor-grabbing"
	on:mousedown={handleMouseDown}
	on:mousemove={handleMouseMove}
	on:mouseup={handleMouseUp}
	on:mouseleave={handleMouseUp}
	on:touchstart={handleMouseDown}
	on:touchmove={handleMouseMove}
	on:touchend={handleMouseUp}
	on:click={handleBackgroundClick}
>
	<Axis shift={currentShift} />
	{#if currentLayer === 'bases'}
		<Box data={Eva} layer="bases" axisShift={currentShift} on:touch={handleBaseTouch} />
	{:else if currentLayer === 'categories'}
		{#each Eva.bases.slice(0, 4) as base, i}
			<Box
				data={base}
				layer="categories"
				color={categoryColors[i]}
				top="{30 + i * 15}%"
				axisShift={currentShift}
				on:touch={() => handleCategoryTouch(base, categoryColors[i])}
			/>
		{/each}
	{:else if currentLayer === 'indicators' && selectedBase}
		{#each selectedBase.categories as category, i}
			<Box
				data={category}
				layer="indicators"
				color="color-mix(in srgb, {selectedColor}, black {i * 10}%)"
				top="{30 + i * 15}%"
				axisShift={currentShift}
				on:touch={() => {}}
			/>
		{/each}
	{/if}
</div>
