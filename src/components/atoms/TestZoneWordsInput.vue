<template>
  <!-- <input
    class="words-input"
    :class="{ strokethrough: guess.length !== lettersGuessed }"
    type="text"
    spellcheck="false"
    autocomplete="off"
    :value="guess"
    @input="onInputHandler"
    @keydown="handleEnterAndSpace"
    :disabled="timeLeft === 0"
  /> -->
  <p
    ref="input"
    class="words-input"
    :class="{ strokethrough: guess.length !== lettersGuessed }"
    spellcheck="false"
    autocomplete="off"
    :value="guess"
    @input="onInputHandler"
    @keydown="handleEnterAndSpace"
    :contenteditable="timeLeft !== 0"
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
    guess() {
      return this.$store.state.guess;
    },
    lettersGuessed() {
      return this.$store.getters.lettersGuessed;
    },
  },
  methods: {
    onInputHandler(event: InputEvent) {
      if (this.timeLeft === 60 && !this.interval) {
        this.startTimer();
      }
      this.$store.commit(
        "setGuess",
        (event.target as HTMLParagraphElement).textContent
      );
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
    clearInput() {
      const input = this.$refs.input as HTMLParagraphElement;
      input.textContent = "";
    },
    handleEnterAndSpace(event: KeyboardEvent) {
      const currentInputValue = this.guess.trim();
      if (event.code === "Enter" || event.code == "Space") {
        event.preventDefault();
        if (!currentInputValue) {
          return;
        } else {
          this.$store.dispatch("updateTestScore");
          this.clearInput();
        }
      }
    },
  },
  mounted() {
    this.$root.$on("focus-input", () => {
      (this.$refs.input as HTMLParagraphElement).focus();
    });
  },
});
</script>

<style lang="scss" scoped>
.words-input {
  height: 10vh;
  min-width: 4px;
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

.strokethrough {
  text-decoration: line-through;
}
</style>
