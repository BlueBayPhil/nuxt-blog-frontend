<template>
  <div class="container articles-container">
    <article class="blog-post" v-for="post in posts" :key="post.id" v-on:click="navigateToArticle(post.slug)">
      <div class="blog-image">
        <img src="https://source.unsplash.com/200x200?caribbean" alt="A photo of the caribbean"/>
      </div>
      <div class="blog-info">
        <h4 class="blog-title">{{ post.title }}</h4>
        <p>{{ post.description }}</p>
      </div>
      <div class="blog-footer text-right">
        <a href="">Read More</a>
      </div>
    </article>

    <div class="load-more" :class="{clickable: currentPage !== lastPage}" v-on:click="fetchPosts">
      <p v-if="currentPage !== lastPage" class="link">Click to load more</p>
      <p v-else-if="loading">Fetching...</p>
      <p v-else>No more posts available.</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "home",
  data() {
    return {
      loading: false,
      currentPage: 1,
      lastPage: 1,
      posts: [],
    };
  },
  computed: {
    isLastPage() {
      return this.currentPage === this.lastPage;
    },
    nextPage() {
      return this.currentPage + 1;
    }
  },
  async asyncData({params, $axios}) {
    const data = await $axios.$get(`/api/posts?page=1&count=5`);

    return {
      posts: data.data,
      currentPage: data.meta.current_page,
      lastPage: data.meta.last_page
    }
  },
  mounted() {
    //
  },
  methods: {
    init() {
      this.loading = true;
      this.fetchPosts();
      this.loading = false;
    },
    navigateToArticle(slug) {
      this.$router.push(`/posts/${slug}`);
    },
    fetchPosts() {
      if (this.isLastPage) {
        // We are on the last page.
        return;
      }
      this.loading = true;
      this.$axios.get(`/api/posts?page=${this.nextPage}&count=5`).then((result) => {
        const data = result.data;
        this.currentPage = data.meta.current_page;
        this.lastPage = data.meta.last_page;
        this.posts = [...this.posts, ...data.data];
      }).catch(function (error) {
        console.error("Failed to load blog posts!");
        console.error(error);
      }).finally(() => {
        this.loading = false;
      });
    },
  }
}
</script>

<style scoped>
.articles-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

}

.blog-post {
  margin: 3rem;
  width: 30rem;
  line-break: anywhere; /** fix content overflow **/
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border: solid 1px #ddd;
  background: #fff;
  cursor: pointer;

  transition-property: box-shadow;
  transition-duration: 0.5s;
}

.blog-post:hover {
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
}

.article-link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.article-link:hover {
  text-decoration: none;
  color: inherit;
}

.blog-image {
  height: 20rem;
  width: 100%;
  background-color: #eeeeee;
}

.blog-image img {
  width: 100%;
  height: auto;
  max-height: 20rem;
}

.blog-info {
  padding: 2rem;
}

.blog-title {
  font-size: 1.6rem;
  font-weight: bold;
}

.blog-footer {
  background: #edf3f3;
  padding: 1rem;
}

.load-more {
  width: 100%;
  padding: 5rem;
  text-align: center;
  color: darkgrey;
  font-size: 2rem;
}

.clickable {
  cursor: pointer;
}
</style>
