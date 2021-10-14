<script lang="ts">
  const { content, description, publishedAt, source, title, url, urlToImage } =
    $$props.story;

  const imageWidth = 130;
  const imageHeight = (imageWidth / 16) * 9;
</script>

<div class="container">
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

  <div>
    <p>
      {description}
    </p>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
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
    margin-top: 0;
  }
</style>
