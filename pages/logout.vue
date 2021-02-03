<template>
  <div>

  </div>
</template>

<script>
export default {
  mounted() {
    this.$auth.logout().then(function () {
      this.$router.push({
        path: '/'
      });
    });
  }
}
</script>

<style scoped>

</style>
