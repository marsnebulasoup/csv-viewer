<template>
  <v-app>
    <router-link to="/" class="back-button">
      <v-btn class="ma-1" outlined color="blue"
        ><v-icon left>mdi-arrow-left</v-icon> Back
      </v-btn>
    </router-link>
    <div class="main">
      <markdown v-if="md" :source="md"></markdown>

    </div>
  </v-app>
</template>

<script>
import markdown from "@/components/Markdown.vue";
const app = require("electron").remote;
const fs = app.require("fs");

export default {
  name: "About",
  components: {
    markdown,
  },
  data() {
    return {
      md: null,
    };
  },
  mounted() {
    try {
      this.md = fs.readFileSync("./README.md", "utf-8");
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style scoped>
.back-button {
  position: absolute;
  top: 2rem;
  left: 2.3rem;
}
.main {
  margin: 7rem;
}
</style>