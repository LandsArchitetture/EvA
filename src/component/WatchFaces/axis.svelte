<script>
	let values = [-5, -4, -3, -2, -1, 0, +1, 2, 3, 4, 5];
</script>

<div class="flex h-full -translate-x-1/2 flex-row items-center justify-between gap-10">
	{#each values as v}
		<div class="w-10 text-center font-[Helvetica] text-2xl hover:scale-110 hover:font-bold">
			{v}
		</div>
	{/each}
</div>
