<template>
  <div>
    <h1 class="page-title">Latest Posts</h1>
    <article class="post-preview" v-for="(article, key) in posts" :key="key">
      <NuxtLink :to="'/posts/' + article.slug">
        <h2>{{ article.title }} <span>Posted {{ (new Date(article.created_at)).toLocaleString() }}</span></h2>
        <p>{{ article.description }}</p>
      </NuxtLink>
    </article>
  </div>
</template>

<script>
export default {
  // middleware: 'auth',
  data() {
    return {
      loading: false,
      firstPageUrl: '',
      lastPageUrl: '',
      nextPageUrl: '',
      currentPage: 0,
      lastPage: 0,
    }
  },
  mounted() {
    this.init();
  },
  async asyncData({params, $axios}) {
    const data = await $axios.$get('/api/posts');

    return {posts: data.data};
  },
  methods: {
    init() {
      this.loading = true;
      this.fetchPosts();
      this.loading = false;
    },
    fetchPosts() {
      this.$axios.get('/api/posts').then((result) => {
        const data = result.data;
        this.firstPageUrl = data.first_page_url;
        this.lastpageUrl = data.last_page_url;
        this.nextPageUrl = data.next_page_url;
        this.currentPage = data.current_age;
        this.lastPage = data.last_page;
        this.posts = data.data;
      }).catch(function (error) {
        console.error("Failed to load blog posts!");
        console.error(error);
      });
    }
  }
}
</script>

<style>
.post-preview {
  padding-bottom: 3rem;
  border-bottom: solid 1px darkgrey;
  margin-bottom: 3rem;
}

.post-preview h2 {
  font-size: 2rem;
  margin-bottom: 1.3rem;
}

.post-preview span {
  display: block;
  float: right;
  color: grey;
  font-style: italic;
  font-size: 1.5rem;
}

.post-preview span:after {
  content: "";
  display: block;
  clear: both;
}
</style>
