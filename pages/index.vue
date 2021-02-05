<template>
  <div>
    <h1 class="page-title">Latest Posts</h1>
    <article class="post-preview" v-for="(article, key) in posts" :key="key">
      <NuxtLink :to="'/posts/' + article.slug">
        <h2>{{ article.title }} <span>Posted {{ (new Date(article.created_at)).toLocaleString() }}</span></h2>
        <p>{{ article.description }}</p>
      </NuxtLink>
    </article>

    <div class="scroll-to-load-more" v-if="!isLastPage">
      <p v-if="loading">Loading...</p>
      <p v-else>Scroll to load more...</p>
    </div>
    <div class="scroll-to-load-more" v-if="isLastPage">
      <p>--- Last Page ---</p>
    </div>
  </div>
</template>

<script>
export default {
  // middleware: 'auth',
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
    const data = await $axios.$get(`/api/posts?page=1&count=3`);

    return {
      posts: data.data,
      currentPage: data.meta.current_page,
      lastPage: data.meta.last_page
    }
  },
  mounted() {
    this.scroll();
  },
  methods: {
    init() {
      this.loading = true;
      this.fetchPosts();
      this.loading = false;
    },
    fetchPosts() {
      if (this.isLastPage) {
        // We are on the last page.
        console.log("Last page reached");
        return;
      }
      console.log(`Loading page ${this.nextPage} / ${this.lastPage}`);
      this.$axios.get(`/api/posts?page=${this.nextPage}&count=3`).then((result) => {
        const data = result.data;
        console.log(data);
        this.currentPage = data.meta.current_page;
        this.lastPage = data.meta.last_page;
        this.posts = [...this.posts, ...data.data];
      }).catch(function (error) {
        console.error("Failed to load blog posts!");
        console.error(error);
      });
    },
    scroll() {
      window.onscroll = () => {
        const bottom = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottom) {
          this.fetchPosts();
        }
      };
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

.scroll-to-load-more {
  padding: 3rem;
  text-align: center;
  font-size: 2.5rem;
}
</style>
