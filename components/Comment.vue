<template>
  <div class="comment">
    <div v-if="!editing">
      <h4>
        {{ comment.author }} <a title="Edit Comment" class="edit-link" v-on:click="editComment()">
        <fa icon="edit"></fa>
      </a>
        <span>{{ (new Date(comment.created_at)).toLocaleString() }}</span>
      </h4>
      <p>{{ comment.message }}</p>
    </div>
    <div v-else>
      <h4>
        {{ comment.author }} <a title="Cancel" class="edit-link cancel" v-on:click="cancelEditing()">
        <fa icon="window-close"></fa>
      </a>
      </h4>
      <div class="comment-scribe">
        <textarea class="form-control" v-model="editedComment" wrap="soft" rows="1"
                  placeholder="Share your thoughts..." :disabled="savingComment"></textarea>
        <button type="button" v-on:click="saveComment()" class="btn btn-primary" :disabled="savingComment">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: [
    'comment'
  ],
  data() {
    return {
      editing: false,
      editedComment: '',
      savingComment: false
    };
  },
  computed: {
    canEdit() {
      // TODO
      return this.$auth.LoggedIn && this.$auth.user.id === this.comment.author_id;
    }
  },
  mounted() {
    console.log(this.comment);
    this.editedComment = this.comment.message;
  },
  methods: {
    editComment() {
      this.editing = true;
    },
    cancelEditing() {
      this.editing = false;
      this.editedComment = this.comment.message; // Reset editedComment.
    },
    saveComment() {
      this.savingComment = true;
      const data = {
        comment: this.editedComment
      };
      this.$axios.put(`/api/posts/${this.comment.post_id}/comments/${this.comment.id}`, data).then(() => {
        // Success.
        this.comment.message = this.editedComment; // this will probably not work.
      }).finally(() => {
        this.savingComment = false;
        this.editing = false;
      });
    }
  }
}
</script>

<style scoped>
.comment {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: solid 1px darkgrey;
}

.comment h4 {
  margin-bottom: 1.3rem;
}

.comment h4 > span {
  color: darkgrey;
  float: right;
}

.comment h4 > span:after {
  content: '';
  display: block;
  width: 100%;
  height: 0;
  clear: both;
}

.edit-link {
  cursor: pointer;
  color: dodgerblue;
}

.edit-link:hover {
  color: dodgerblue;
}

.edit-link.cancel {
  color: red;
}

.comment-scribe {
  display: flex;
  flex-direction: row;
}

.comment-scribe > textarea {
  flex-grow: 1;
  width: 90%;
  margin-right: 1rem;
}
</style>
