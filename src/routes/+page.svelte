<script>
	import Diagram from '../component/diagram.svelte';
	import Base from '../component/base.svelte';
	import { EvAState } from '../data/state.svelte';

	let data = EvAState;

	let test = 0;

	$: console.log(data);
</script>

<div style="display: flex; justify-content: space-around; align-items: center; height: 100vh;">
	<div
		style="text-align: center; display: flex; flex-direction: column; justify-content: space-around; height: 100vh; margin-left: 2rem; flex-grow: 1;"
	>
		{#each data.bases.slice(0, 2) as base}
			<Base name={base.name} {base} value={base.value} {test} />
		{/each}
	</div>

	<Diagram {data} />

	<div
		style="text-align: center; display: flex; flex-direction: column; justify-content: space-around; height: 100vh; margin-right: 2rem; flex-grow: 1;"
	>
		{#each data.bases.slice(2, 4) as base}
			<Base name={base.name} {base} value={base.value} {test} />
		{/each}
	</div>
</div>
