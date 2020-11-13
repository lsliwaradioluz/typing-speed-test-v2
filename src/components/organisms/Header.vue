<template>
  <div class="header">
    <Title>Test prędkości pisania</Title>
    <div class="scores">
      <Score
        v-for="(score, index) in scores"
        :key="index"
        :number="score.number"
        :caption="score.caption"
      />
    </div>
    <Score :number="timeLeft" caption="sekund" />
    <transition name="fade">
      <Buttons v-if="this.timeLeft === 0" data-test="buttons" />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Title from "@/components/atoms/HeaderTitle.vue";
import Score from "@/components/atoms/HeaderScore.vue";
import Buttons from "@/components/molecules/HeaderButtons.vue";
import { mapState } from "vuex";

interface Score {
  number: number;
  caption: string;
}

export default Vue.extend({
  components: {
    Title,
    Score,
    Buttons,
  },
  computed: {
    ...mapState(["correctWords", "charsPerMinute", "timeLeft"]),
    scores(): Score[] {
      return [
        { number: this.correctWords, caption: "słowa/min" },
        { number: this.charsPerMinute, caption: "znaki/min" },
        { number: this.accuracy, caption: "dokładność %" },
      ];
    },
    accuracy(): void {
      return this.$store.getters.accuracy;
    },
  },
});
</script>

<style scoped>
.header {
  padding-top: 5vh;
  height: 55vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90deg, #fceb2f, #ff7590);
}

.scores {
  display: flex;
  justify-content: space-between;
  width: 30%;
  padding-bottom: 1.5rem;
}
</style>
