<script lang="ts">
	import type { Article } from '../types/Article';

	const { description, publishedAt, source, title, url, urlToImage } = $$props.article as Article;

	const imageWidth = 130;
	const imageHeight = (imageWidth / 16) * 9;

	const formattedDate = new Date(publishedAt).toLocaleString();

	const handleClick = () => {
		window.open(url, '_blank');
	};
</script>

<button class="container" on:click={handleClick}>
	<div class="header">
		<img
			style="--image-width: {imageWidth}px; --image-height: {imageHeight}px"
			class="image"
			src={urlToImage}
			alt={description}
		/>
		<h3 class="title">
			{title}
		</h3>
	</div>

	<p class="metadata">{source.name} --- {formattedDate}</p>

	<p>
		{description}
	</p>
</button>

<style>
	.container {
		display: flex;
		flex-direction: column;
		text-align: start;
		background-color: #ededed;
		padding: 10px;
		border-radius: 15px;
		margin-bottom: 15px;
	}
	.header {
		display: flex;
	}
	.image {
		width: var(--image-width);
		height: var(--image-height);
		margin-right: 10px;
	}
	.title {
		margin: 0;
	}
	.metadata {
		margin: 5px 0;
	}
</style>
