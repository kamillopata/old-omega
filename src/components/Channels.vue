<template>
  <div class="channels">
    <h2>
      {{ $t('channels.title') }}
      {{ $t(`channels.${channelType}`) }}
    </h2>
    <div
      v-for="channel in channels"
      :key="channel.uid"
      :class="{ 'channel': true, 'active': channel.uid === active }"
      @click="choose(channel)"
    >
      <p
        class="name"
        v-text="channel.name"
      />
      <ul class="tags">
        <ol
          v-for="tag in channel.tags"
          :key="tag"
          v-text="tag"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/database';
import { mapGetters } from 'vuex';

export default {
  name: 'Channels',

  data() {
    return {
      users: {},
      channels: [],
      active: null,
    };
  },

  computed: {
    ...mapGetters({
      group: 'user/group',
    }),
    channelType() {
      return this.group === 'customer' ? 'stylists' : 'customers';
    },
  },

  async created() {
    const users = firebase.database().ref('/users/');
    users.on('child_added', (snapshot) => this.updateChannel(snapshot.key, snapshot.val()));
  },

  methods: {
    updateChannel(key, user) {
      if (user.group === this.group) {
        return;
      }
      this.users[key] = user;
      this.channels = Object.keys(this.users).map((index) => this.users[index]);
    },
    choose(channel) {
      this.active = channel.uid;
      this.$emit('switchChannel', channel);
    },
  },

};
</script>

<style lang="scss" scoped>
.channel {
  cursor: pointer;
  &:hover,
  &.active {
    font-weight: 700;
  }
}
</style>
