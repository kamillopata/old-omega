<template>
  <div>
    <h1 v-t="'register.title'" />
    <input
      v-model.trim="email"
      type="email"
      :placeholder="$t('register.email')"
    ><br>
    <input
      v-model.trim="password"
      type="password"
      :placeholder="$t('register.password')"
    ><br>
    <p>{{ error }}</p>
    <button
      v-t="'register.cta'"
      @click="register"
    />
  </div>
</template>

<script>
export default {
  name: 'Register',

  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },

  methods: {
    async register() {
      this.error = null;
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
