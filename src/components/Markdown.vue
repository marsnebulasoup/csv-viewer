<template>
  <vue-simple-markdown class="md" :source="source"></vue-simple-markdown>
</template>

<script>
export default {
  name: "Markdown",
  props: ["source"],
};
</script>

<style>
.md {
    font-family: Quicksand;
}

.md h1 {
  font-size: 3rem;
  font-weight: 400;
}

.md h2 {
  font-weight: 30;
}

.md h3 {
  font-weight: 30;
}

.md p {
  font-weight: 300;
}
</style>