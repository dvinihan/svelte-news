<script lang="ts">
	import ListItem from '../components/ListItem.svelte';

	let articles = [];

	fetch(`/fetchArticles.json`)
		.then((res) => res.json())
		.then((data) => {
			articles = data.articles;
		})
		.catch(() => {});
</script>

<div class="container">
	<h1>Google News</h1>
	<div class="list-item">
		{#each articles as article}
			<ListItem {article} />
		{/each}
	</div>
</div>

<style>
	.container {
		margin: 10px;
	}
	.list-item {
		display: flex;
		flex-direction: column;
	}
</style>
