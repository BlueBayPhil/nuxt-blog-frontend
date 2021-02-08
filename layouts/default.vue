<template>
  <div id="page">
    <header id="banner">
      <h1>My blog</h1>
      <h2>A simple blog example using Nuxt.js and Laravel 8</h2>
    </header>
    <NavBar/>
    <div class="grid">
      <main class="col-9">
        <Nuxt/>
      </main>
      <SideBar/>
    </div>

    <AdminMenu/>
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
  max-width: 1440px;
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

.flex-column-10 {
  flex-grow: 10;
  width: 83.33%;
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

input, .form-control {
  display: block;
  width: 100%;
  border: solid 1px lightgrey;
  padding: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.3rem;
}

.form-group {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
}

button, input[type="button"], input[type="submit"], .btn {
  padding: 1rem;
  border: solid 1px lightgrey;
  border-radius: 5px;
  font-size: 1.5rem;
  box-sizing: border-box;
  display: block;
  cursor: pointer;
}
button:disabled {
  background: lightgrey;
  border-color: lightgrey;
  cursor: default;
}
a.btn {
  display: inline-block;
  text-decoration: none;
}

.btn-primary {
  background-color: dodgerblue;
  border-color: blue;
  color: white;
}

.float-right {
  float: right;
}

.float-right::after {
  content: '';
  display: block;
  width: 100%;
  height: 0;
  clear: both;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 1rem;
}

.col-1 {
  grid-column: col-start / span 1;
}

.col-2 {
  grid-column: col-start / span 2;
}

.col-3 {
  grid-column: col-start / span 3;
}

.col-4 {
  grid-column: col-start / span 4;
}

.col-5 {
  grid-column: col-start / span 5;
}

.col-6 {
  grid-column: col-start / span 6;
}

.col-7 {
  grid-column: col-start / span 7;
}

.col-8 {
  grid-column: col-start / span 8;
}

.col-9 {
  grid-column: col-start / span 9;
}

.col-10 {
  grid-column: col-start / span 10;
}

.col-11 {
  grid-column: col-start / span 11;
}

.col-12 {
  grid-column: col-start / span 12;
}
</style>
<script>
import NavBar from "@/components/NavBar";

export default {
  components: {NavBar}
}
</script>
