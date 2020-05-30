<template>
  <div>
    <h1 v-t="'register.title'" />
    <input
      v-model.trim="name"
      type="text"
      :placeholder="$t('register.name')"
    ><br>
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
    <p v-text="error" />
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
      name: null,
      email: null,
      password: null,
      error: null,
    };
  },

  methods: {
    async register() {
      this.error = null;
      const event = {
        name: this.name,
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
