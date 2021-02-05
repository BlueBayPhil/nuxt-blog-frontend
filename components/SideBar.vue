<template>
  <div class="sidebar-container">
    <CreatePostSidebar v-if="this.$route.name == 'create'"></CreatePostSidebar>
  </div>
</template>

<script>
export default {
  name: "SideBar",
}
</script>

<style scoped>

</style>
