<template>
  <div class="random-words">
    <p class="word" data-test="current-word">{{ lettersLeft }}</p>
    <p class="word" data-test="remaining-words">{{ words }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    lettersLeft() {
      let lettersLeftToGuess = this.$store.getters.currentWord;
      lettersLeftToGuess = lettersLeftToGuess.slice(
        this.$store.getters.lettersGuessed
      );
      return lettersLeftToGuess;
    },
    words() {
      return `${this.$store.getters.remainingWords.join(" ")}`;
    },
  },
});
</script>

<style lang="scss" scoped>
.random-words {
  display: flex;
  height: 10vh;
  width: 50vw;
  flex-shrink: 0;
  line-height: 6vh;
  padding: 2vh 0;
  cursor: text;
  overflow-x: hidden;
}

.word {
  display: inline-block;
  font-family: "Merriweather", serif;
  white-space: nowrap;
  font-size: 2rem;
  margin-right: 8px;
  text-align: right;
}
</style>
