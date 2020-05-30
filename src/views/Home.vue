<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <Register v-if="!uid" />
    <Login v-if="!uid" />
    <Logout v-if="uid" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Register from '@/components/Register.vue';
import Login from '@/components/Login.vue';
import Logout from '@/components/Logout.vue';

export default {
  name: 'Home',
  components: {
    Register,
    Login,
    Logout,
  },
  computed: {
    ...mapGetters({
      uid: 'user/uid',
    }),
  },
};
</script>
