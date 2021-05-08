<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter/index.svelte';
	import '$lib/styles.css'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>

		</div>

		<button type="submit" class="btn">Login1</button>
		<button type="submit" class="btn2">Login2</button>


	</h1>

	<h2 class="text-red-800">
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.btn {
		@apply text-white bg-indigo-500 px-2 py-1 rounded hover:bg-indigo-800;
	}


</style>
