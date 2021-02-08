<template>
  <nav>
    <ul id="navbar">
      <li class="nav-link">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="nav-link">
        <NuxtLink to="/about">About</NuxtLink>
      </li>
 Edit_Comments
      <li class="nav-link push-right" v-if="$auth.loggedIn && $route.name !== 'create'">
        <NuxtLink to="/create">
          <fa :icon="['far', 'edit']"/>
          Create Post
        </NuxtLink>
      </li>
      <li class="nav-link push-right" v-if="$auth.loggedIn && $route.name === 'create'">

      <li class="nav-link push-right"
          v-if="$auth.loggedIn && ($route.name === 'create' || $route.name === 'posts-edit-slug')">
 main
        <button type="button" id="btnSubmitPost" class="btn btn-primary"
                v-on:click="() => {$store.commit('post/posting')}"
                :disabled="$store.state.post.posting">
          Save
        </button>
      </li>
      <li class="nav-link push-right" v-if="$auth.loggedIn && $route.name === 'posts-slug'">
        <NuxtLink class="btn btn-primary" :to="`/posts/edit/${$route.params.slug}`">Edit</NuxtLink>
      </li>
      <li class="nav-link push-right" v-if="!$auth.loggedIn">
        <NuxtLink to="/login">Sign In</NuxtLink>
      </li>
      <li class="nav-link push-right" v-else>
        <NuxtLink to="/logout">Logout</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script>

export default {
  name: 'NavBar',
  mounted() {
    console.log(this.$route);
  }
}
</script>
<style>
#navbar {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 5rem;
  background-color: azure;
  padding: 0;
  margin-bottom: 3rem;
}

#navbar .nav-link {
  /**/
}

.nav-link a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 3rem;
  text-align: center;
}

.push-right {
  margin-left: auto;
}
</style>
