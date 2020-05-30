<template>
  <div>
    {{ active }}
  </div>
</template>

<script>
export default {
  name: 'Chat',

  props: {
    active: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
