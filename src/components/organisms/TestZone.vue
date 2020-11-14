<template>
  <div class="test-zone">
    <WordsInput />
    <RandomWords />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import WordsInput from "../atoms/TestZoneWordsInput.vue";
import RandomWords from "../atoms/TestZoneRandomWords.vue";

export default Vue.extend({
  components: {
    WordsInput,
    RandomWords,
  },
});
</script>

<style lang="scss" scoped>
.test-zone {
  display: flex;
  height: auto;
  background-color: white;
}
</style>
