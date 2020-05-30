<template>
  <div>
    <h1>Registration</h1>
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
    <button @click="register">
      Register
    </button>
  </div>
</template>

<script>
export default {
  name: 'Register',

  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },

  methods: {
    async register() {
      const event = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch('user/register', event);
      } catch (exception) {
        this.error = exception.message;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
