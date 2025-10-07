<script>
	export let data;
</script>

<div
	style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; gap: 1rem;"
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="80vh" style="flex-grow: 1;">
		<defs>
			<mask id="circularMask">
				<circle cx="50" cy="50" r="50" fill="white" />
			</mask>
		</defs>
		<line
			x1="50"
			y1="50"
			x2="50"
			y2="15"
			stroke="black"
			stroke-width="0.5"
			transform="rotate({data.time.hours * 30} 50 50)"
		/>
	</svg>

	<button onclick={() => data.time.hours++}>Increment</button>
	<input
		oninput={(event) => (data.time.hours = event.target.value)}
		type="number"
		value={data.time.hours}
	/>
</div>
