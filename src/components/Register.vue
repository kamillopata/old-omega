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
    <p>{{ error }}</p>
    <button @click="register">
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
      email: 'whoopi5@gmail.com',
      password: 'password',
      error: '',
    };
  },

  methods: {
    async register() {
      try {
        const response = await firebase.auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(response.user);
      } catch (exception) {
        this.error = exception.message;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
