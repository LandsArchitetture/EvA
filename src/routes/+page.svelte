<script>
	import Diagram from '../component/diagram.svelte';
	import Base from '../component/base.svelte';
	import EvA, { calculate, print } from '../component/EvA.svelte.js';

	calculate();
</script>

<div style="display: flex; justify-content: space-around; align-items: center; height: 100vh;">
	<div
		style="text-align: center; display: flex; flex-direction: column; justify-content: space-around; height: 100vh; margin-left: 2rem; flex-grow: 1;"
	>
		{#each EvA.bases.slice(0, 2) as base}
			<Base name={base.name} {base} value={base.value} />
		{/each}
	</div>

	<Diagram {EvA} />

	<div
		style="text-align: center; display: flex; flex-direction: column; justify-content: space-around; height: 100vh; margin-right: 2rem; flex-grow: 1;"
	>
		{#each EvA.bases.slice(2, 4) as base}
			<Base name={base.name} {base} value={base.value} />
		{/each}
	</div>
</div>
