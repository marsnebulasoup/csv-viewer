<template>
  <div>
    <p class="text-overline">From a File</p>
    <v-file-input
      counter
      show-size
      truncate-length="15"
      placeholder="Open a CSV File"
      accept=".csv"
      v-model="file"
    ></v-file-input>
  </div>
</template>

<script>
export default {
  name: "openfile",
  data() {
    return {
      file: null,
    };
  },
  watch: {
    file(f) {
      if (f) {
        f.text().then((data) => {
          this.$store.commit("updateData", data);
        });
      }
    },
  },
};
</script>