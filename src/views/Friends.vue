<template>
  <div class="friends">
    <Friend
      v-for="friend in friendsProfiles"
      :key="friend.id"
      :friend="friend" />
  </div>
</template>

<script>
import Friend from "@/components/Friend.vue";
export default {
  name: "Friends",
  components: {
    Friend,
  },
  data() {
    return {
      friendProfiles: [],
    };
  },
  created() {
    this.friendsProfiles = this.$store.state.user.friends;
  },
};
</script>

<style></style>
