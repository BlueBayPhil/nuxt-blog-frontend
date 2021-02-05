<template>
  <div>
    <form method="post" @submit.prevent="savePost()">
      <div class="form-group">
        <label for="titleField">Title</label>
        <input type="text" v-model="postTitle" id="titleField" maxlength="100" placeholder="My awesome title...">
      </div>
      <div class="form-group">
        <label for="contentField">Content</label>
        <textarea id="contentField" class="form-control" v-model="postContent" style="height: 65vh"
                  placeholder="Free your mind..."></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    postTitle: {
      get() {
        return this.$store.state.post.title;
      },
      set(value) {
        this.$store.commit('post/title', value);
      }
    },
    postContent: {
      get() {
        return this.$store.state.post.content;
      },
      set(value) {
        this.$store.commit('post/content', value);
      }
    },
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
