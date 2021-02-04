<template>
  <div id="page">
    <header id="banner">
      <h1>My blog</h1>
      <h2>A simple blog example using Nuxt.js and Laravel 8</h2>
    </header>
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
    <div class="flex-container">
      <div class="row">
        <main class="flex-column flex-column-9">
          <Nuxt/>
        </main>
        <aside class="flex-column flex-column-3">
            <SideBar />
        </aside>
      </div>
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  font-size: 10px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-size: 1.6rem;
}

#page {
  margin: 0 auto;
  width: auto;
  max-width: 1024px;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.8rem;
  font-weight: normal;
}

#banner {
  width: 100%;
  margin-bottom: 1rem;
  padding: 2rem;
}

#banner h1 {
  font-size: 5rem;
  font-weight: bold;
  padding: 0;
  margin: 0 0 1rem 0;
}

#banner h2 {
  font-size: 3rem;
  font-weight: normal;
  padding: 0;
  margin: 0;
}

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
.nav-link a:hover, .nuxt-link-exact-active {
  background-color: black;
  color: white;
}

.flex-container {
  display: flex;
  flex-direction: row;
}

.flex-container .row {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}

.flex-column {
  flex: 1;
  margin-right: 5rem;
}
*.flex-column:last-child {
  margin-right: 0;
}
.flex-column-3 {
  flex-grow: 3;
  width: 25%;
}

.flex-column-9 {
  flex-grow: 9;
  width: 75%;
}

.box {
  padding: 3rem;
  background-color: lightgrey;
}
.box-outline {
  background: none;
  border: solid 1px lightgrey;
  border-radius: 2px;
}

.mb-1 {
  margin-bottom: 1rem;
}
.mb-2 {
  margin-bottom: 2rem;
}
.mb-3 {
  margin-bottom: 3rem;
}
</style>
