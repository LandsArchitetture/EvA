<script>
	let { data } = $props();

	const RADIUS = {
		inner: 26,
		middle: 37,
		outer: 46
	};

	const STROKEWIDTH = {
		inner: 14,
		middle: 10,
		outer: 8
	};

	const CIRCUMFERENCES = {
		inner: 2 * Math.PI * RADIUS.inner,
		middle: 2 * Math.PI * RADIUS.middle,
		outer: 2 * Math.PI * RADIUS.outer
	};

	const COLORS = ['#0000FF', '#FFFF00', '#00FF00', '#FF0000'];

	let OFFSET = {
		inner: 0,
		middle: 0,
		outer: 0
	};

	function shadeColor(color, percent) {
		var R = parseInt(color.substring(1, 3), 16);
		var G = parseInt(color.substring(3, 5), 16);
		var B = parseInt(color.substring(5, 7), 16);

		R = parseInt((R * (100 + percent)) / 100);
		G = parseInt((G * (100 + percent)) / 100);
		B = parseInt((B * (100 + percent)) / 100);

		R = R < 255 ? R : 255;
		G = G < 255 ? G : 255;
		B = B < 255 ? B : 255;

		R = Math.round(R);
		G = Math.round(G);
		B = Math.round(B);

		var RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
		var GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
		var BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

		return '#' + RR + GG + BB;
	}
	function calculateColor(i, j, k, layer) {
		if (layer === 'inner') {
			return COLORS[i];
		} else if (layer === 'middle') {
			return shadeColor(COLORS[i], -10 * j);
		} else if (layer === 'outer') {
			return shadeColor(COLORS[i], -10 * k);
		}
	}
	function calculateOffset(i, j, k, layer) {
		let returnOffset;
		let base;
		let category;
		let indicator;
		switch (layer) {
			case 'inner':
				returnOffset = OFFSET.inner;
				base = data.bases[i];
				OFFSET.inner -= base.percent * CIRCUMFERENCES.inner;
				return returnOffset;

			case 'middle':
				returnOffset = OFFSET.middle;
				base = data.bases[i];
				category = base.categories[j];
				OFFSET.middle -= base.percent * category.percent * CIRCUMFERENCES.middle;
				return returnOffset;

			case 'outer':
				returnOffset = OFFSET.outer;
				base = data.bases[i];
				category = base.categories[j];
				indicator = category.indicators[k];
				OFFSET.outer -= base.percent * category.percent * indicator.percent * CIRCUMFERENCES.outer;
				return returnOffset;

			default:
				return 0;
		}
	}
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="80vh" style="flex-grow: 1;">
	<!-- Basis -->
	{#if data}
		{#each data.bases as base, i}
			<circle
				cx="50"
				cy="50"
				r={RADIUS.inner}
				id={base.id}
				fill="none"
				stroke={calculateColor(i, 0, 0, 'inner')}
				stroke-width={STROKEWIDTH.inner}
				stroke-dasharray={`${base.percent * CIRCUMFERENCES.inner} ${CIRCUMFERENCES.inner}`}
				stroke-dashoffset={calculateOffset(i, 0, 0, 'inner')}
				transform="rotate(-90 50 50)"
			/>
			{#each base.categories as category, j}
				<circle
					cx="50"
					cy="50"
					r={RADIUS.middle}
					id={category.id}
					fill="none"
					stroke={calculateColor(i, j, 0, 'middle')}
					stroke-width={STROKEWIDTH.middle}
					stroke-dasharray={`${base.percent * category.percent * CIRCUMFERENCES.middle} ${CIRCUMFERENCES.middle}`}
					stroke-dashoffset={calculateOffset(i, j, 0, 'middle')}
					transform="rotate(-90 50 50)"
				/>
				{#each category.indicators as indicator, k}
					{#if k <= 3}
						<circle
							cx="50"
							cy="50"
							r={RADIUS.outer}
							id={indicator.id}
							fill="none"
							stroke={calculateColor(i, j, k, 'outer')}
							stroke-width={STROKEWIDTH.outer}
							stroke-dasharray={`${base.percent * category.percent * indicator.percent * CIRCUMFERENCES.outer} ${CIRCUMFERENCES.outer}`}
							stroke-dashoffset={calculateOffset(i, j, k, 'outer')}
							transform="rotate(-90 50 50)"
						/>
					{/if}
				{/each}
			{/each}
		{/each}
	{/if}
	<text
		x="50"
		y="50"
		text-anchor="middle"
		alignment-baseline="middle"
		font-size="8"
		font-weight="bold">2000 W/h</text
	>
</svg>
