<template>
  <div class="page">
    <div class="blog-post">
      <h2>{{ post.title }}</h2>
      <h3>Posted By: {{ post.author }}</h3>
      {{ post.content }}
    </div>
    <h3>Comments</h3>

    <div class="comment-scribe-window">

      <div v-if="!$auth.loggedIn">
        You must be signed in to post a comment.
        <NuxtLink to="/login" class="btn btn-primary">Sign In</NuxtLink>
      </div>

      <form v-if="$auth.loggedIn" @submit.prevent="submitComment" class="comment-scribe">
        <textarea class="form-control" v-model="comment" wrap="soft" rows="1"
                  placeholder="Share your thoughts..." v-on:click="expandCommentTextArea($event)"
                  v-on:blur="collapseCommentTextArea($event)" :disabled="postingComment"></textarea>
        <button type="submit" class="btn btn-primary" :disabled="postingComment">Submit</button>
      </form>
    </div>

    <div class="comments-container">
      <div class="loading" v-if="loading">Loading Comments...</div>
      <div v-else-if="comments.length < 1" class="no-comments">
        <p>No comments to display.</p>
      </div>
      <Comment v-for="comment in comments" :key="comment.id" :comment="comment"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null,
      comments: [],
      loading: false,
      comment: '',
      postingComment: false,
      commentPage: 1,
      commentPageCount: 1
    };
  },
  async asyncData({params, $axios}) {
    const post = await $axios.$get(`/api/posts/${params.slug}`);

    return {
      post
    }
  },
  mounted() {
    this.loadComments();
  },
  methods: {
    loadComments() {
      this.loading = true;

      this.$axios.get(`/api/posts/${this.post.id}/comments?page=${this.commentPage}&sort=desc&count=5`).then((result) => {
        this.comments = result.data.data;

        this.commentPageCount = result.data.meta.last_page;
        this.commentPage = result.data.meta.current_page;
      }).finally(() => {
        this.loading = false;
      });
    },
    submitComment() {
      if (!this.$auth.loggedIn) {
        // How did we get here?!
        return;
      }
      this.postingComment = true;

      this.$axios.post(`/api/posts/${this.post.id}/comments`, {
        comment: this.comment
      }).then(() => {
        // Add our comment to the top of the comment list.
        this.comments.unshift({
          author: this.$auth.user.name,
          message: this.comment,
          created_at: new Date().toISOString()
        });
        // Clear comment textarea.
        this.comment = '';
        this.postingComment = false;
      });
    },
    expandCommentTextArea(event) {
      event.currentTarget.setAttribute('rows', 3);
    },
    collapseCommentTextArea(event) {
      event.currentTarget.setAttribute('rows', 1);
    }
  }
}
</script>

<style scoped>
.comment-scribe-window {
  margin-bottom: 2rem;
  border: solid 1px darkgrey;
  border-radius: 5px;
  background-color: #fafafa;
  padding: 2rem;
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

.comments-container {
  border: solid 1px darkgrey;
  padding: 1rem;
  border-radius: 3px;
}

.comments-container .comment:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.loading {
  padding: 4rem;
  font-size: 2rem;
  text-align: center;
}
.blog-post {
  white-space: pre-wrap;
}
h3 {
  margin: 3rem 0;
}
.no-comments {
  text-align: center;
  color: darkgrey;
  font-size: 2rem;
}
</style>
