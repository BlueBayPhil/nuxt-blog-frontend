<template>
  <div class="container">
    <div class="alert alert-danger" v-if="error">
      <p>{{ errorMessage }}</p>
    </div>
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
        <button type="submit" class="btn btn-primary" :disabled="isAuthenticating">
          Login
        </button>
        <button type="button" v-on:click="githubLogin" class="btn btn-github">
          <font-awesome-icon icon="github"></font-awesome-icon>
          Login With GitHub
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
      isAuthenticating: false,
      error: false,
      errorMessage: "",
    };
  },
  mounted() {
    // Before loading the login page, set the csrf cookie from the server.
    this.$axios.get('/sanctum/csrf-cookie');
  },
  methods: {
    githubLogin() {
      window.location = "http://localhost:8000/api/login/github";
    },
    async handleLogin() {
      this.isAuthenticating = true;

      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        });
      } catch(e) {
        this.error = true;
        this.errorMessage= e.response.data.error;
      }

      this.isAuthenticating = false;
    }
  }
}
</script>

<style scoped>

</style>
