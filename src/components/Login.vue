<template>
  <div>
    <h1 v-t="'login.title'" />
    <input
      v-model.trim="email"
      type="email"
      :placeholder="$t('login.email')"
    ><br>
    <input
      v-model.trim="password"
      type="password"
      :placeholder="$t('login.password')"
    ><br>
    <p>{{ error }}</p>
    <button
      v-t="'login.cta'"
      @click="login"
    />
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },

  methods: {
    async login() {
      this.error = null;
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
