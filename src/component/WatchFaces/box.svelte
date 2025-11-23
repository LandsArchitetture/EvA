<script>
	import { createEventDispatcher } from 'svelte';
	export let data;
	export let layer;
	export let color = 'red';
	export let top = '50%';
	export let axisShift = 0;
	$: min = Math.min(...data[layer].map((b) => b.value));
	$: max = Math.max(...data[layer].map((b) => b.value));
	$: width = Math.max((max - min) / 100, 1);
	$: shift = data.value / (max - min);
	$: offset = (data.value / 1000 - axisShift) * 10;

	const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="bg--500 absolute h-[3rem] w-[calc(var(--width)*1rem)] -translate-x-1/2 -translate-y-1/2 rounded-md bg-[var(--color)]"
	style="--shift: {shift}; --width: {width}; --color : {color}; top: {top}; left: calc(50% + {offset}rem);"
	on:click={(e) => {
		e.stopPropagation();
		dispatch('touch');
	}}
></div>
