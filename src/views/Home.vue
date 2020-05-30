<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <Register v-if="!userId" />
    <Login v-if="!userId" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Register from '@/components/Register.vue';
import Login from '@/components/Login.vue';

export default {
  name: 'Home',
  components: {
    Register,
    Login,
  },
  computed: {
    ...mapGetters({
      userId: 'user/id',
    }),
  },
};
</script>
