<template>
  <div class="page">
    <Editor />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  computed: {
    posting() {
      return this.$store.state.post.posting;
    }
  },
  watch: {
    posting() {
      this.savePost();
    }
  },
  methods: {
    savePost() {
      this.$axios.post('/api/posts', this.$store.state.post).then(() => {
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
