<template>
  <div class="page">
    <form method="post" @submit.prevent="onFormSubmit">
      <div class="form-group">
        <label for="emailAddress">Email Address</label>
        <input type="email" name="email" id="emailAddress" placeholder="you@awesome.com" class="from-control" required
               v-model="form.email">
      </div>
      <div class="form-group">
        <label for="nameInput">Name</label>
        <input type="text" name="name" id="nameInput" placeholder="Mickey Mouse" class="form-control" required
               v-model="form.name">
      </div>
      <div class="form-group">
        <label for="passwordInput">Password</label>
        <input type="password" name="password" id="passwordInput" placeholder="SuperSecret123" class="form-control"
               required v-model="form.password">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" :disabled="submitting">Create Account</button>
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
        name: '',
        password: ''
      },
      submitting: false,
    };
  },
  methods: {
    onFormSubmit() {
      this.submitting = true;
      this.$axios.post('/api/register', {...this.form}).then(() => {
        this.$router.push('/login');
      }).finally(() => {
        this.submitting = false;
      });
    },
  }
}
</script>

<style scoped>

</style>
