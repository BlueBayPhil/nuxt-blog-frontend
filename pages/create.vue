<template>
  <div class="page">
    <Editor v-on:submit="savePost"/>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    savePost() {
      const formData = new FormData();

      formData.append('title', this.$store.state.post.title);
      formData.append('description', this.$store.state.post.description);
      formData.append('content', this.$store.state.post.content);
      formData.append('image', this.$store.state.post.image);

      this.$axios.post(
        '/api/posts',
        formData, {
          headers: {
            'content-Type': 'multipart/form-data'
          }
        }).then(() => {
        // Redirect to the newly created post.
        this.$store.commit('post/posting');
        console.log("Created!");
        this.$store.commit('post/blank');
        this.$router.push('/');
      });
    },
  }
}
</script>

<style scoped>

</style>
