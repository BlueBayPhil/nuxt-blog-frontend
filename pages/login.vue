<template>
  <div class="container">
    <form @submit.prevent="handleLogin()">
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
.container {
  margin: 15rem auto 0;
  width: auto;
  max-width: 1024px;
}

.form-group {
  display: block;
  margin-bottom: 0.5rem;
}

label {
  display: block;
  margin-bottom: 0.3rem;
}

input, .form-control {
  border: solid 1px darkgrey;
  border-radius: 5px;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  font-size: 1rem;
}

button, .btn {
  padding: 8px;
  border: solid 1px darkgrey;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.btn-primary {
  background-color: dodgerblue;
  color: white;
}
</style>
