<template>
  <div class="container">
    <div>
      <p>{{ $auth.user.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style>
.container {
  margin: 0 auto;
  width: auto;
  max-width: 1024px;
}
</style>
