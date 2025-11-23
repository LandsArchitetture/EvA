<script>
	import Diagram from '../component/diagram.svelte';
	import Watch from '../component/watch.svelte';
	import Base from '../component/Variables/base.svelte';
	import EvA, { calculate, print } from '../component/Stores/EvA.svelte.js';

	calculate();
</script>

<div class="mx-8 flex h-screen items-center justify-around gap-8">
	<div class="flex h-screen w-1/3 flex-grow flex-col justify-around text-center">
		{#each EvA.bases.slice(0, 2) as base}
			<Base name={base.name} {base} value={base.value} />
		{/each}
	</div>

	<!-- <Diagram {EvA} /> -->
	<Watch Eva={EvA} />

	<div class="flex h-screen w-1/3 flex-grow flex-col justify-around text-center">
		{#each EvA.bases.slice(2, 4) as base}
			<Base name={base.name} {base} value={base.value} />
		{/each}
	</div>
</div>
