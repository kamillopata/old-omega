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
    <template v-if="email.includes('+stylist')">
      <input
        v-model.trim="location"
        type="text"
        :placeholder="$t('register.location')"
      ><br>
      <input
        v-model.trim="tags"
        type="text"
        :placeholder="$t('register.tags')"
      ><br>
    </template>
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
      name: '',
      email: '',
      password: '',
      location: '',
      tags: '',
      error: '',
    };
  },

  methods: {
    async register() {
      this.error = null;
      const event = {
        name: this.name,
        email: this.email,
        password: this.password,
        location: this.location,
        tags: this.tags,
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
