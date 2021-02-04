<template>
  <div class="container">
    <form @submit.prevent="handleLogin()">
      <h4>Please enter your Email address and Password to sign in</h4>
      <div class="form-group">
        <label for="emailInput">Email Address:</label>
        <input type="email" id="emailInput" v-model="form.email">
      </div>
      <div class="form-group">
        <label for="passwordInput">Password:</label>
        <input type="password" id="passwordInput" v-model="form.password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" :disabled="isAuthenticating">Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      isAuthenticating: false
    };
  },
  mounted() {
    // Before loading the login page, set the csrf cookie from the server.
    this.$axios.get('/sanctum/csrf-cookie');
  },
  methods: {
    handleLogin() {
      this.isAuthenticating = true;

      this.$auth.loginWith('local', {
        data: {
          email: this.form.email,
          password: this.form.password
        }
      }).then(function () {
        this.isAuthenticating = false;
      });
    }
  }
}
</script>

<style scoped>

</style>
