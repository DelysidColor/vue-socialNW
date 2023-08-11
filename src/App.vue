<template>
  <div id="app">
    <p>{{ $store.state.Friends }}</p>
    <nav v-if="$store.state.isLogined">
      <div class="nav-container">
        <router-link :to="{ name: 'profilepage' }">
          <div class="avatar">
            <img :src="user.picture" alt="avatar" />
            <span class="nav-fullname">{{ user.name }}</span>
          </div>
        </router-link>

        <div class="nav-links">
          <router-link :to="{ name: 'profilepage' }">Profile</router-link>
          <router-link :to="{ name: 'friends' }">Friends</router-link>
          <a href="#" @click.prevent="logout">Exit</a>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    logout() {
      this.$store.commit("delUser");
      return this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
.nav-links {
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-between;
}
.nav-fullname {
  margin-left: 20px;
  margin-right: 20px;
  color: azure;
}
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.avatar {
  display: flex;
  align-items: center;
}

.avatar img {
  height: 40px;
  border-radius: 50%;
}

nav {
  padding: 10px;
  background: #222e3b;
}

nav a {
  font-weight: bold;
  color: #c9def4;
}

nav a.router-link-exact-active {
  color: #8d65d6;
}

.avatar,
nav a {
  text-decoration: none;
}
</style>
