<template>
  <div class="editor">
    <div class="left">
    <div class="form-group">
      <label for="titleField">Title</label>
      <input type="text" v-model="title" id="titleField" maxlength="100" placeholder="My awesome title...">
    </div>
    <div class="form-group">
      <label for="contentField">Content</label>
      <textarea id="contentField" class="form-control" v-model="content" style="height: 65vh"
                placeholder="Free your mind..." wrap="hard"></textarea>
    </div>
    </div>
    <div class="right">
      <div class="form-group">
        <button type="button" v-on:click="submit" class="btn btn-primary">Save</button>
      </div>
      <div class="form-group">
        <label for="descriptionField">Description</label>
        <textarea id="descriptionField" class="form-control" rows="2" wrap="off" placeholder="Describe your thoughts..."></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  props: {
    editing: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState('post')
  },
  methods: {
    submit() {
      this.$store.commit("post/posting");
    }
  }
}
</script>

<style scoped>
.editor {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.editor .left, .editor .right {
  flex-grow: 1;
}
.left {
  flex-basis: 75rem;
  flex-grow: 2;
  margin-right: 1.5rem;
}
.right {
  padding-top: 2rem;
}
button {
  width: 100%;
}
</style>
