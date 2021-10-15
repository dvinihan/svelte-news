<script lang="ts">
	import ListItem from '../components/ListItem.svelte';

	import { getPastDateString } from '../helpers';
	import type { Article } from '../types/Article';

	const API_KEY = '984dd1c1b9a54fceaf67c61bcaf77433';

	let stories: Article[] = [];

	const searchTerms = ['apple', 'google'].join(' OR ');
	const searchFromDate = getPastDateString(2);

	fetch(
		`https://newsapi.org/v2/everything?q=${searchTerms}&from=${searchFromDate}&sortBy=popularity&apiKey=${API_KEY}`
	)
		.then((response) => response.json())
		.then((data) => {
			stories = data.articles;
		});
</script>

<div class="container">
	<h1>Google News</h1>
	<div class="list-item">
		{#each stories as story}
			<ListItem {story} />
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
