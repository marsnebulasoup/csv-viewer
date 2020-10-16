<template>
  <v-app>
    <v-row>
      <v-col cols="5" style="padding-left: 6rem; padding-top: 3rem"
        ><loadfile></loadfile
      ></v-col>
      <v-col cols="1">
        <v-divider
          style="margin-left: 50%; margin-right: 50%"
          vertical
        ></v-divider>
      </v-col>
      <v-col cols="5" style="padding-top: 3rem"
        ><displayfile></displayfile
      ></v-col>
    </v-row>
    <router-link to="about" class="about-button">
      <v-btn class="ma-1" outlined color="blue"> About </v-btn>
    </router-link>
  </v-app>
</template>

<script>
import Loadfile from "@/views/Loadfile.vue";
import Displayfile from "@/views/Displayfile.vue";

export default {
  name: "Home",

  components: {
    Loadfile,
    Displayfile,
  },
};
</script>

<style>
.about-button {
  position: absolute;
  top: 0rem;
  right: 1rem;
}
</style>