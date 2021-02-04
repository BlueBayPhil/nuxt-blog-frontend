<template>
  <div class="blog-post">
    <h2>{{ post.title }}</h2>
    <h3>Posted By: {{ post.author }}</h3>

    {{ post.content }}
  </div>
</template>

<script>
export default {
  async asyncData({params, $axios}) {
    const post = await $axios.$get(`/api/posts/${params.slug}`);

    console.log(post);

    return {
      post
    };
  }
}
</script>

<style scoped>

</style>
