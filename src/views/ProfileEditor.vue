<template>
  <div class="container">
    <div class="main">
      <form ref="fileForm" style="display: none">
        <input
          @change="updateImageDisplay"
          ref="fileInput"
          type="file"
          name="files"
          id="file"
          :v-model="file"
          accept=".jpg, .jpeg, .png" />

        <div class="preview"></div>
      </form>
      <div class="avatar">
        <button
          v-if="newPhoto.src !== ''"
          type="button"
          class="pictureDel"
          @click="pictureDelete">
          Del
        </button>
        <label for="file">
          <img v-if="newPhoto.src !== ''" :src="newPhoto.src" alt="avatar" />
          <img v-else :src="user.picture" alt="" />
        </label>
        <div v-if="newPhoto.src !== ''">
          <p>Photo name: {{ newPhoto.name }}</p>
          <p>Photo size: {{ newPhoto.size.toFixed(2) }} mb</p>
        </div>
      </div>
      <div class="info">
        <button @click="save">Save</button>
        <h1>
          <input class="editor" placeholder="Full Name" v-model="user.name" />
        </h1>
        <h3>
          E-mail:
          <input
            class="editor"
            placeholder="Your e-mail"
            v-model="user.email" />
        </h3>
        <p>
          Age:
          <input class="editor" placeholder="Your age" v-model="user.age" />
        </p>
        <h3>Skills</h3>
        <ul>
          <li v-for="(skill, i) in user.skills" :key="i">
            <input class="editor" v-model="user.skills[i]" /><span
              class="skilldel"
              @click="removeSkill(i)"
              >x</span
            >
          </li>
          <li>
            <a href="#" @click.prevent="addSkill">Add</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="description">
      <h3>About</h3>
      <p>
        <textarea class="editor" v-model="user.about"></textarea>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.user = this.$store.state.user;
  },
  data() {
    return {
      user: {},
      newPhoto: {
        src: "",
        size: "",
        name: "",
      },
      file: {},
    };
  },
  methods: {
    removeSkill(index) {
      this.user.skills.splice(index, 1);
    },
    addSkill() {
      this.user.skills.push("");
    },
    save() {
      if (!this.newPhoto.src) {
        return this.$router.back();
      }
      this.user.picture = this.newPhoto.src;
      this.$store.commit("setUser", this.user);

      this.$router.back();
    },
    updateImageDisplay() {
      let curFile = this.$refs.fileInput.files[0];

      this.newPhoto.name = curFile.name;
      this.newPhoto.size = curFile.size / (1024 * 1024);
      this.newPhoto.src = curFile.src;

      const reader = new FileReader();

      reader.onload = (e) => {
        this.newPhoto.src = e.target.result;
      };

      reader.readAsDataURL(curFile);
    },
    pictureDelete() {
      this.newPhoto.src = "";
      this.newPhoto.name = "";
      this.newPhoto.size = 0;
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
  border-radius: 50%;
}

.skilldel:hover {
  color: red;
  cursor: pointer;
}

.main {
  display: flex;
  justify-content: space-between;
  height: 500px;
}

.info {
  width: 50%;
}

li {
  margin-bottom: 5px;
}

textarea.editor {
  width: 100%;
}

.pictureDel {
  position: absolute;
  left: 400px;
}

.pictureDel:hover {
  color: red;
  cursor: pointer;
}
</style>
