<template>
  <nav>
    <ul id="navbar">
      <li class="nav-link">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="nav-link">
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'NavBar'
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
</style>
