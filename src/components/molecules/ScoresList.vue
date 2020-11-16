<template>
  <ul class="score-list">
    <Score
      v-for="(score, key) in scores"
      :key="key"
      :score="score"
    />
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import Score from "@/components/atoms/ScoresListScore.vue";

export default Vue.extend({
  components: { Score },
  data() {
    return {
      scores: null,
    };
  },
  async mounted() {
    const response = await this.axios.get(
      "https://speedtest-results-8b891.firebaseio.com/results.json"
    );
    this.scores = response.data;
  },
});
</script>

<style lang="scss" scoped></style>
