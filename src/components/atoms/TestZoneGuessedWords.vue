<template>
  <div class="guessed-words">
    <p
      class="guessed-word"
      :class="{ strokethrough: !word.correct }"
      v-for="(word, index) in guessedWords"
      :key="index"
    >
      {{ word.value }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    guessedWords() {
      return this.$store.state.guessedWords;
    },
  },
});
</script>

<style lang="scss" scoped>
.guessed-words {
  display: flex;
  justify-content: flex-end;
  white-space: nowrap;
  flex-grow: 1;
  overflow-x: hidden;
  margin-right: 6px;
}

.guessed-word {
  font-family: "Merriweather", serif;
  font-size: 2rem;
  color: #ff7590;
  line-height: 6vh;
  padding: 2vh 0;
  margin-left: 10px;
}

.strokethrough {
  text-decoration: line-through;
}
</style>
