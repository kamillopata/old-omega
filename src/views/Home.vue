<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <Register v-if="!uid" />
    <Login v-if="!uid" />
    <Logout v-if="uid" />
    <Chat v-if="uid" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Register from '@/components/Register.vue';
import Login from '@/components/Login.vue';
import Logout from '@/components/Logout.vue';
import Chat from '@/components/Chat.vue';

export default {
  name: 'Home',
  components: {
    Register,
    Login,
    Logout,
    Chat,
  },
  computed: {
    ...mapGetters({
      uid: 'user/uid',
    }),
  },
};
</script>
