<template>
  <form class="form" @submit.prevent="login">
    <div class="item">
      <input
        type="text"
        class="login"
        v-model="username"
        placeholder="Full name" />
    </div>

    <div class="item">
      <input
        type="password"
        class="passord"
        v-model="password"
        placeholder="Password" />
    </div>

    <button class="login-btn" type="submit">Enter</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {
    if (this.$store.getters.getUser) {
      console.log(this.$store.state.user);
      return this.$router.push({ name: "profilepage" });
    }
  },
  methods: {
    login() {
      for (let user of this.$store.getters.Users) {
        if (user.name === this.username && user.password === this.password) {
          this.$store.commit("setUser", user);
          return this.$router.push({
            name: "profilepage",
            params: { id: user.id },
          });
        } else if (
          user.name === this.username &&
          user.password !== this.password
        ) {
          this.password = "";
          return alert("incorrect password");
        }
      }

      if (this.$store.getters.user === undefined) {
        return alert("User doesn't exist");
      }
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  height: 150px;
  margin: auto;
  margin-top: 20vh;
}

.login-btn {
  cursor: pointer;
  color: azure;
  background-color: rgb(59, 58, 58);
  border: none;
  border-radius: 3px;
  padding: 3px;
}

.login-btn:active {
  background-color: black;
}

.item {
  display: flex;
  flex-direction: column;
}
</style>
