<template>
  <div>
    <Button
      v-t="'logout.cta'"
      @click="logout"
    />
    <p v-text="error" />
  </div>
</template>

<script>
export default {
  name: 'Logout',

  data() {
    return {
      error: null,
    };
  },

  methods: {
    async logout() {
      this.error = null;
      try {
        await this.$store.dispatch('user/logout');
      } catch (exception) {
        this.error = exception.message;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
