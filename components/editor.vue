<template>
  <div class="editor">
    <div class="form-group">
      <label for="titleField">Title</label>
      <input type="text" v-model="postTitle" id="titleField" maxlength="100" placeholder="My awesome title...">
    </div>
    <div class="form-group">
      <label for="contentField">Content</label>
      <textarea id="contentField" class="form-control" v-model="postContent" style="height: 65vh"
                placeholder="Free your mind..."></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editing: {
      type: Boolean,
      default: false
    }
  },
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
  }
}
</script>

<style scoped>

</style>
