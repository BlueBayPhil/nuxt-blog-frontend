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
        <textarea id="descriptionField" class="form-control" rows="2" wrap="off"
                  placeholder="Describe your thoughts..."></textarea>
      </div>
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
    title: {
      get() {
        return this.$store.state.post.title;
      },
      set(value) {
        this.$store.commit('post/title', value);
      }
    },
    content: {
      get() {
        return this.$store.state.post.content;
      },
      set(value) {
        this.$store.commit('post/content', value);
      }
    },
    description: {
      get() {
        return this.$store.state.post.description;
      },
      set(value) {
        this.$store.commit('post/description', value);
      }
    }
  },
  methods: {
    submit() {
      this.$emit('submit');
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
