<template>
  <div>
    <p class="text-h4">View Data</p>
    <v-skeleton-loader v-if="loading === true" type="table"></v-skeleton-loader>
    <data-table
      :headers="headers"
      :data="data"
      v-else-if="loading === false"
    ></data-table>
    <div
      style="text-align: center; padding-top: 10rem"
      v-else-if="loading == 'error'"
    >
      <p class="text-h5">Uh Oh!</p>
      <p class="text-subtitle-1">This Data Couldn't be Processed</p>
      <div v-for="(error, index) in errors" :key="index">
        <v-alert
      dense
      outlined
      type="error"
    >
      {{ error.row != undefined ? 'Row ' + error.row + ' — ' : "" }}{{ error.message }}
    </v-alert>
      </div>
    </div>
    <div style="text-align: center; padding-top: 10rem" v-else>
      <p class="text-h5">No Data Yet</p>
      <p class="text-subtitle-1">Add Some Data to View</p>
    </div>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import { Bus } from "@/utils/Bus.js";
import { transform } from "lodash";
const Papa = require("papaparse");

export default {
  name: "displayfile",
  components: {
    "data-table": Table,
  },
  data() {
    return {
      loading: null,
      headers: [],
      data: [],
      errors: []
    };
  },
  methods: {
    processData() {
      this.loading = true;
      try {
        this.data = this.headers = this.errors = [];
        const csvdata = this.$store.state.csvdata;
        console.log("Starting...");
        // console.log(csvdata)
        setTimeout(() => { // Wait a bit so that the loading indicatiors can actually load first
          Papa.parse(csvdata, {
            header: true,
            skipEmptyLines: true,
            complete: (json) => {
              if(json.errors.length == 0) {
              this.data = json.data;
              this.processHeaders(json.meta.fields);
              }
              else {
                console.log('Errors:')
                console.log(json.errors)
                this.errors = json.errors;
                this.loading = "error";
                Bus.$emit("processed-data");
              }
            },
          });
        }, 200);
      } catch (error) {
        console.log("This error has been caught. Error message:");
        this.loading = "error";
        Bus.$emit("processed-data");
        console.error(error);
      }
    },
    processHeaders(headers) {
      try {
        console.log("Processing Headers...");
        headers.forEach((header) => {
          this.headers.push({
            text: header.toUpperCase(),
            align: "start",
            filterable: true,
            value: header,
          });
        });
        console.log(this.headers);
        Bus.$emit("processed-data");
        this.loading = false;
        console.log("All done! Displaying data...");
      } catch (error) {
        this.loading = "error";
        Bus.$emit("processed-data");
        console.log(
          "This error has been caught, in processHeaders(). Error message:"
        );
        console.error(error);
      }
    },
  },
  mounted() {
    Bus.$on("process-data", this.processData);
  },
};
</script>