<template>
  <div class="admin-menu" id="adminMenu" v-if="$auth.loggedIn">
    <button type="button" class="btn btn-primary"
            v-bind:class="{hidden: !menuHidden}" v-on:click="showMenu">Show Menu
    </button>

    <ul class="menu" v-bind:class="{hidden: menuHidden}">
      <li class="menu-item">
        <NuxtLink to="/create">Create Post</NuxtLink>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "AdminMenu",
  data() {
    return {
      menuHidden: true
    }
  },
  methods: {
    showMenu() {
      this.menuHidden = false;
      const outsideClickHandler = event => {
        if(!document.getElementById('adminMenu').contains(event.target) && !this.menuHidden) {
          this.menuHidden = true;
          document.removeEventListener('click', outsideClickHandler);
        }
      };

      document.addEventListener('click', outsideClickHandler);
    },
    hideMenu() {
      if (!this.menuHidden) {
        this.menuHidden = true;
      }
    }
  }
}
</script>

<style scoped>
.admin-menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.hidden {
  display: none;
}

.menu {
  list-style: none;
  height: 100vh;
  width: fit-content;
  background-color: black;
  color: white;
  padding: 1.5rem;
}

.menu-item {
  display: block;
  padding: 1rem 0;
  border-bottom: solid 1px darkgrey;
  margin-bottom: 1rem;
}

.menu .menu-item:last-child {
  border-bottom: 0;
}

.menu-item a {
  color: white;
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>
