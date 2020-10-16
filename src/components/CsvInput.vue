<template>
  <div style="margin-top: 4rem">
    <p class="text-overline">From Elsewhere</p>
    <v-textarea
      outlined
      label="Raw Data"
      placeholder="Paste Raw Data Here"
      :auto-grow="true"
      v-model="csvdata"
      rows="15"
    ></v-textarea>
  </div>
</template>

<script>
export default {
  name: "csvinput",
  data() {
    return {
      csvdata: null,
    };
  },
  watch: {
    csvdata(data) {
      this.$store.commit("updateData", data);
    },
  },
};
</script>