<template>
  <input
    class="words-input"
    type="text"
    spellcheck="false"
    autocomplete="off"
    @input="onInputHandler"
    :disabled="timeLeft === 0"
  />
</template>

<script lang="ts">
import Vue from "vue";

interface Data {
  interval: number | null;
}

export default Vue.extend({
  data(): Data {
    return {
      interval: null,
    };
  },
  computed: {
    timeLeft(): number {
      return this.$store.state.timeLeft;
    },
  },
  methods: {
    onInputHandler(event: InputEvent) {
      if (this.timeLeft === 60 && !this.interval) {
        this.startTimer();
      }
      this.$store.commit("setGuess", (event.target as HTMLInputElement).value);
    },
    startTimer(): void {
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.$store.commit("decrementTimeleft");
        } else if (this.timeLeft === 0) {
          clearInterval(this.interval!);
        }
      }, 1000);
    },
  },
});
</script>

<style lang="scss" scoped>
.words-input {
  height: 10vh;
  min-width: 1px;
  flex-shrink: 0;
  line-height: 6vh;
  padding: 2vh 0;
  outline: none;
  text-align: right;
  font-family: "Merriweather", serif;
  font-size: 2rem;
  color: #ff7590;
  overflow: hidden;
  white-space: nowrap;
  border: none;
}
</style>
