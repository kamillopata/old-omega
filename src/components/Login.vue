<template>
  <div>
    <h1>Login</h1>
    <input
      v-model.trim="email"
      type="email"
      placeholder="email"
    ><br>
    <input
      v-model.trim="password"
      type="password"
      placeholder="password"
    ><br>
    <p>{{ error }}</p>
    <button @click="login">
      Login
    </button>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      email: 'whoopi5@gmail.com',
      password: 'password',
      error: '',
    };
  },

  methods: {
    async login() {
      const event = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch('user/login', event);
      } catch (exception) {
        this.error = exception.message;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
