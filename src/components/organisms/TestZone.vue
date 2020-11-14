<template>
  <div class="test-zone" @keydown="disableKeys">
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
  methods: {
    disableKeys(event: KeyboardEvent) {
      if (event.key == "Enter") {
        event.preventDefault();
      } else if (
        event.code == "Space"
        // && this.$refs.input.innerHTML.length == 0
      ) {
        event.preventDefault();
      }
    },
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
