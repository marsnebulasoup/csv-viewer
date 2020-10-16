<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search_placeholder"
        append-icon="mdi-magnify"
        clearable
        label="Search"
        single-line
        hide-details
        @input="loading = true"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="data"
      :search="search"
      :loading="loading"
      @current-items="loading = false"
    ></v-data-table>
  </v-card>
</template>

<script>
import _ from "lodash";

export default {
  name: "data-table",
  props: ["data", "headers"],
  data() {
    return {
      search: null,
      search_placeholder: null,
      loading: false,
    };
  },
  watch: {
    search_placeholder: _.debounce(function (placeholder) {
      this.search = placeholder;
    }, 400),
  }
};
</script>

