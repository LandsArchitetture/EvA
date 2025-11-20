<script>
	import time from '../Stores/time.svelte.js';

	const twoFormat = (n) => String(n).padStart(2, '0');
</script>

<p class="flex h-full items-center justify-center text-center font-[Helvetica] text-7xl font-bold">
	{twoFormat($time.getHours())}:{twoFormat($time.getMinutes())}:{twoFormat($time.getSeconds())}
</p>
