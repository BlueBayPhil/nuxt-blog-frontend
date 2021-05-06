<template>
  <div class="page">
    <Editor v-on:submit="savePost" />
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
      let formData = new FormData();
      for(const prop in this.$store.state.post) {
        formData.set(prop, this.$store.state.post[prop]);
      }

      this.$axios.post(
        '/api/posts',
        formData, {
          headers: {
            'Content-Type': "multipart/form-data",
          }
        }
      ).then(() => {
        // Redirect to the newly created post.
        this.$store.commit('post/posting');
        this.$store.commit('post/blank');
        this.$router.push('/');
      });
    },
  }
}
</script>

<style scoped>

</style>
