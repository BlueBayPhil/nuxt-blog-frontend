<template>
  <div class="navbar">
    <div class="nav">
      <div class="nav-item">
        <NuxtLink to="/">Home</NuxtLink>
      </div>
      <div class="nav-item">
        <NuxtLink to="/about">About</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  mounted() {
    console.log(this.$route);
  }
}
</script>

<style scoped>

</style>
