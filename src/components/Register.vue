<template>
  <div>
    <h1>Registration</h1>
    <input
      v-model.trim="email"
      type="email"
      placeholder="email"
    ><br>
    <input
      v-model.trim="password"
      type="password"
      placeholder="password"
    ><br>
    <button @click="login">
      Register
    </button>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Register',

  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    async login() {
      console.log('login');
      const response = await firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password);
      console.log('query response');
      console.log(response);
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  h1 {
    background: red;
  }
}
</style>
