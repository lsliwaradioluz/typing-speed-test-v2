<template>
  <div class="test-zone" @click="focusInput">
    <GuessedWords />
    <WordsInput ref="input" />
    <RandomWords />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GuessedWords from "../atoms/TestZoneGuessedWords.vue";
import WordsInput from "../atoms/TestZoneWordsInput.vue";
import RandomWords from "../atoms/TestZoneRandomWords.vue";

export default Vue.extend({
  components: {
    GuessedWords,
    WordsInput,
    RandomWords,
  },
  methods: {
    focusInput() {
      this.$root.$emit("focus-input");
    },
  },
});
</script>

<style lang="scss" scoped>
.test-zone {
  display: flex;
  justify-content: space-between;
  height: auto;
  background-color: white;
}
</style>
