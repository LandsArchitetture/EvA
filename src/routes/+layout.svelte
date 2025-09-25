<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.jpg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
</svelte:head>

{@render children?.()}
