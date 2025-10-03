<script>
	import Diagram from '../component/diagram.svelte';
	import Base from '../component/base.svelte';
	import EvA from '../data/EvA.json';

	let data = EvA;
</script>

<div style="display: flex; justify-content: space-around; align-items: center; height: 100vh;">
	<div
		style="text-align: center; display: flex; flex-direction: column; justify-content: space-around; height: 100vh; margin-left: 2rem; flex-grow: 1;"
	>
		<Base
			name={data.bases[0].name}
			base={data.bases[0]}
			value={data.bases[0].value}
			color={data.bases[0].color}
		/>
		<Base
			name={data.bases[1].name}
			base={data.bases[1]}
			value={data.bases[1].value}
			color={data.bases[1].color}
		/>
	</div>

	<Diagram {data} />

	<div
		style="text-align: center; display: flex; flex-direction: column; justify-content: space-around; height: 100vh; margin-right: 2rem; flex-grow: 1;"
	>
		<Base
			name={data.bases[2].name}
			base={data.bases[2]}
			value={data.bases[2].value}
			color={data.bases[2].color}
		/>
		<Base
			name={data.bases[3].name}
			base={data.bases[3]}
			value={data.bases[3].value}
			color={data.bases[3].color}
		/>
	</div>
</div>
