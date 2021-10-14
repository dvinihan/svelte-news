<script lang="ts">
  import ListItem from "./ListItem.svelte";
  import type { Article } from "./types/Article";

  const API_KEY = "984dd1c1b9a54fceaf67c61bcaf77433";

  let stories: Article[] = [];

  fetch(
    `https://newsapi.org/v2/everything?q=Apple&from=2021-10-12&sortBy=popularity&apiKey=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      stories = data.articles;
    });
</script>

<h1>Google News</h1>
<div class="list-item">
  {#each stories as story}
    <ListItem {story} />
  {/each}
</div>

<style>
  .list-item {
    display: flex;
    flex-direction: column;
  }
</style>
