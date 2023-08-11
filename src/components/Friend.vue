<template>
  <div
    class="friend"
    @click="$router.push({ name: 'friendProfile', params: { id: friend.id } })">
    <div class="main">
      <div class="avatar">
        <img :src="friend.picture" alt="avatar" />
      </div>
      <div class="main-name">
        <h3>{{ friend.name }}</h3>
        <a href="#">{{ friend.email }}</a>
      </div>
    </div>
    <div class="description">
      <p>
        {{ friend.about }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Friend",
  props: {
    friend: Object,
  },
};
</script>

<style scoped>
.friend {
  display: flex;
}

.main {
  display: flex;
}

.avatar {
  margin: 30px;
}

.avatar img {
  height: 50px;
}

.main-name {
  margin: 30px;
}

.description {
  margin: 30px;
}
</style>
