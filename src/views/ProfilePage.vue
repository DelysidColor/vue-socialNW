<template>
  <div class="container">
    <div class="main">
      <div class="avatar">
        <img :src="$store.state.user.picture" alt="avatar" />
      </div>
      <div class="info">
        <h1>
          {{ $store.state.user.name }}
          <router-link :to="{ name: 'ProfileEditor' }">Edit</router-link>
        </h1>
        <a :href="$store.state.user.email">E-mail</a>
        <p>
          <span style="font-weight: 900">Age :</span>
          {{ $store.state.user.age }}
        </p>
        <h3>Skills</h3>
        <ul>
          <li v-for="(skill, i) in $store.state.user.skills" :key="i">
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
    <div class="description">
      <h3>About</h3>
      <p>
        {{ $store.state.user.about }}
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar {
  padding: 20px;
  margin: 20px;
}
.avatar img {
  height: 300px;
  border-radius: 50%;
}

.main {
  display: flex;
}
</style>
