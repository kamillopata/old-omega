<template>
  <div class="messages">
    <div
      v-for="message in messages"
      :key="message.uid"
      class="message"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Messages',

  props: {
    partner: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      messages: [],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
