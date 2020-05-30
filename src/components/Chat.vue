<template>
  <div class="chat">
    <h2>
      {{ $t('chat.title') }}
      {{ active.name }}
    </h2>
    <Messages :partner="partner" />
    <Input :partner="partner" />
  </div>
</template>

<script>
import Messages from '@/components/Messages.vue';
import Input from '@/components/Input.vue';

export default {
  name: 'Chat',

  components: {
    Messages,
    Input,
  },

  partner: {
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
