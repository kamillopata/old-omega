<template>
  <div class="home">
    <template v-if="uid">
      <Logout />
      <Channels @switchChannel="activeChannel = $event" />
      <Chat :active="activeChannel" />
    </template>
    <template v-else>
      <Register />
      <Login />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Register from '@/components/Register.vue';
import Login from '@/components/Login.vue';
import Logout from '@/components/Logout.vue';
import Chat from '@/components/Chat.vue';
import Channels from '@/components/Channels.vue';


export default {
  name: 'Home',
  components: {
    Register,
    Login,
    Logout,
    Channels,
    Chat,
  },
  data() {
    return {
      activeChannel: {},
    };
  },
  computed: {
    ...mapGetters({
      uid: 'user/uid',
    }),
  },
};
</script>
