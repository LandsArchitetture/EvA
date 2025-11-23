<script>
	export let shift = 0;
	let gap = 8;
	let size = 2;
	let values = [-5000, -4000, -3000, -2000, -1000, 0, +1000, 2000, 3000, 4000, 5000];
</script>

<div
	class="absolute top-0 left-1/2 flex h-full translate-x-[calc(-50%_+_var(--shift)*(var(--size)_+_var(--gap))*1rem)] flex-row items-center justify-center gap-[calc(var(--gap)*1rem)] py-4"
	style="--shift: {-shift}; --gap: {gap}; --size: {size};"
>
	{#each values as v}
		<div class="flex h-full w-[calc(var(--size)*1rem)] flex-col items-center gap-1">
			<div class="text-center text-4xl font-bold">
				{v}
			</div>
			<div class="w-0.5 flex-1 bg-gray-800"></div>
		</div>
	{/each}
</div>
