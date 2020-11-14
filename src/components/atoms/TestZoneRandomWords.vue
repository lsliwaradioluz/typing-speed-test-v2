<template>
  <p class="random-words">
    {{ words }}
  </p>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    words() {
      return `${
        this.$store.getters.currentWord
      } ${this.$store.getters.remainingWords.join(" ")}`;
    },
  },
});
</script>

<style lang="scss" scoped>
.random-words {
  height: 10vh;
  line-height: 6vh;
  padding: 2vh 0;
  font-family: "Merriweather", serif;
  font-size: 2rem;
  white-space: nowrap;
  overflow-x: hidden;
  cursor: text;
}
</style>
