<template>
  <div class="page">
    <Editor v-on:submit="savePost" />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData(ctx) {
    const post = await ctx.$axios.$get(`/api/posts/${ctx.params.slug}`);

    ctx.store.commit('post/set', post);
  },
  methods: {
    savePost() {
      this.$axios.put(`/api/posts/${this.$route.params.slug}`, this.$store.state.post).then(() => {
        // Redirect to the newly created post.
        this.$store.commit('post/blank');
        this.$router.push(`/posts/${this.$route.params.slug}`);
      });
    },
  }
}
</script>

<style scoped>

</style>
