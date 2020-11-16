<template>
  <ul class="score-list">
    <Score v-for="(score, index) in sortedScores" :key="index" :score="score" />
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import Score from "@/components/atoms/ScoresListScore.vue";

interface ResponseData {
  [dataKey: string]: Score;
}

interface Response {
  data: ResponseData;
  [responseKey: string]: any;
}

interface Score {
  name: string;
  accuracy: number;
  words: number;
  characters: number;
}

export default Vue.extend({
  components: { Score },
  data() {
    return {
      scores: null,
    };
  },
  computed: {
    sortedScores(): Score[] {
      if (this.scores) {
        const scoresArray: Score[] = Object.values(this.scores as any);
        const sortedScores: Score[] = scoresArray.sort(
          (o1: Score, o2: Score): number => {
            return o2.characters - o1.characters;
          }
        );
        return sortedScores as Score[];
      } else {
        return [];
      }
    },
  },
  async mounted() {
    const response: Response = await this.axios.get(
      "https://speedtest-results-8b891.firebaseio.com/results.json"
    );
    (this as any).scores = response.data;
  },
});
</script>

<style lang="scss" scoped></style>
