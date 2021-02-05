<template>
  <div>
    <div class="form-group">
      <label for="descriptionField">Description</label>
      <textarea class="form-control" v-model="postDescription" placeholder="Describe your post for the homepage..."
                rows="2" id="descriptionField"></textarea>
    </div>

    <div class="form-group">
      <label for="publishAtField">Publish At</label>
      <v-date-picker mode="dateTime" v-model="postPublishAt" :min-date="new Date()">
        <template v-slot="{inputValue, inputEvents}">
          <input type="text" id="publishAtField" :value="inputValue" v-on="inputEvents">
        </template>
      </v-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePostSidebar",
  computed: {
    postDescription: {
      get() {
        return this.$store.state.post.description;
      },
      set(value) {
        this.$store.commit('post/description', value);
      }
    },
    postPublishAt: {
      get() {
        return this.$store.state.post.published_at;
      },
      set(value) {
        this.$store.commit('post/published_at', value);
      }
    }
  }
}
</script>

<style scoped>

</style>
