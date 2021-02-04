<template>
  <div class="page">
    <div class="blog-post">
      <h2>{{ post.title }}</h2>
      <h3>Posted By: {{ post.author }}</h3>

      {{ post.content }}
    </div>
    <h3>Comments</h3>

    <div class="comment-scribe-window">
      <form method="post" @action.prevent="submitComment()" class="flex-container" v-if="$auth.loggedIn">
        <div class="form-group flex-column flex-column-10">
          <label>
          <textarea class="form-control" rows="1" v-on:click="expandCommentTextArea($event)"
                    v-on:blur="collapseCommentTextArea($event)"
                    placeholder="Post a comment..."></textarea>
          </label>
        </div>
        <div class="form-group flex-column">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
      <div v-if="!$auth.loggedIn">
        You must be signed in to post a comment. <NuxtLink to="/login" class="btn btn-primary">Sign In</NuxtLink>
      </div>
    </div>

    <div class="comments-container">
      <div class="loading" v-if="loading">Loading Comments...</div>
      <div class="comment" v-for="comment in comments" :key="comment.id">
        <h4>{{ comment.author }} - <span>{{ (new Date(comment.created_at)).toLocaleString() }}</span></h4>
        <p>{{ comment.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null,
      comments: [],
      loading: false
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
      this.$axios.get(`/api/posts/${this.post.id}/comments`).then((result) => {
        this.comments = result.data.data;
      }).finally(() => {
        this.loading = false;
      });
    },
    submitComment() {
      // TODO
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

.comments-container {
  border: solid 1px darkgrey;
  padding: 1rem;
  border-radius: 3px;
}

.comment {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: solid 1px darkgrey;
}

.comments-container .comment:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
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

.loading {
  padding: 4rem;
  font-size: 2rem;
  text-align: center;
}

h3 {
  margin: 3rem 0;
}
</style>
