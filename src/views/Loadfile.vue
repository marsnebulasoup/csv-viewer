<template>
  <div>
    <p class="text-h4">Load Data</p>
    <openfile></openfile>
    <csvinput></csvinput>
    <div style="display: flex; justify-content: flex-end">
      <v-btn class="ma-2" outlined color="indigo" :loading="loading" @click="processData()">
        Process
      </v-btn>
    </div>
  </div>
</template>

<script>
import openfile from "@/components/OpenFile.vue";
import csvinput from "@/components/CsvInput.vue";
import { Bus } from "@/utils/Bus.js";

export default {
  name: "loadfile",
  data() {
      return {
          loading: false
      }
  },
  methods: {
      processData() {
          this.loading = true;
          Bus.$emit('process-data');
      }
  },
  components: {
    openfile,
    csvinput,
  },
  mounted() {
      Bus.$on('processed-data', () => this.loading = false)
  }
};
</script>