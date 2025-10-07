<script>
	import EvA from './EvA.svelte.js';
	import {
		OFFSET,
		RADIUS,
		STROKEWIDTH,
		CIRCUMFERENCES,
		calculateOffsets
	} from './diagram.svelte.js';

	calculateOffsets();

	const COLORS = ['#0000FF', '#FFFF00', '#00FF00', '#FF0000'];

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
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="80vh" style="flex-grow: 1;">
	<!-- Basis -->
	{#if EvA}
		{#each EvA.bases as base, i}
			<circle
				cx="50"
				cy="50"
				r={RADIUS.inner}
				id={base.id}
				fill="none"
				stroke={calculateColor(i, 0, 0, 'inner')}
				stroke-width={STROKEWIDTH.inner}
				stroke-dasharray={`${base.percent * CIRCUMFERENCES.inner} ${CIRCUMFERENCES.inner * (1 - base.percent)}`}
				stroke-dashoffset={-OFFSET.inner[i]}
				transform="rotate(-45 50 50)"
			/>
			<!-- {#if i <= 0} -->
			{#each base.categories as category, j}
				<circle
					cx="50"
					cy="50"
					r={RADIUS.middle}
					id={category.id}
					fill="none"
					stroke={calculateColor(i, j, 0, 'middle')}
					stroke-width={STROKEWIDTH.middle}
					stroke-dasharray={`${base.percent * category.percent * CIRCUMFERENCES.middle} ${CIRCUMFERENCES.middle * (1 - base.percent * category.percent)}`}
					stroke-dashoffset={-OFFSET.middle[i * 4 + j]}
					transform="rotate(-45 50 50)"
				/>
				{#each category.indicators as indicator, k}
					<circle
						cx="50"
						cy="50"
						r={RADIUS.outer}
						id={indicator.id}
						fill="none"
						stroke={calculateColor(i, j, k, 'outer')}
						stroke-width={STROKEWIDTH.outer}
						stroke-dasharray={`${base.percent * category.percent * indicator.percent * CIRCUMFERENCES.outer} ${CIRCUMFERENCES.outer * (1 - base.percent * category.percent * indicator.percent)}`}
						stroke-dashoffset={-OFFSET.outer[i * 16 + j * 4 + k]}
						transform="rotate(-45 50 50)"
					/>
				{/each}
			{/each}
			<!-- {/if} -->
		{/each}
	{/if}
	<text
		x="50"
		y="50"
		text-anchor="middle"
		alignment-baseline="middle"
		font-size="8"
		font-weight="bold">{EvA.value + ' W'}</text
	>
</svg>
