<template>
  <div class="container">
    <div class="main">
      <div class="avatar">
        <img :src="friend.picture" alt="avatar" />
      </div>
      <div class="info">
        <h1>{{ friend.name }}</h1>
        <a :href="friend.email">E-mail</a>
        <p>
          <span style="font-weight: 900">Age :</span>
          {{ friend.age }}
        </p>
        <h3>Skills</h3>
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>Fourth</li>
          <li>Fifth</li>
          <li>Sixth</li>
        </ul>
      </div>
    </div>
    <div class="description">
      <h3>About</h3>
      <p>
        {{ friend.about }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    friendList() {
      return this.$store.state.user.friends;
    },
    friend() {
      return this.friendList.find((el) => el.id == this.$route.params.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar {
  padding: 20px;
  margin: 20px;
}
.avatar img {
  height: 300px;
}

.main {
  display: flex;
}
</style>
