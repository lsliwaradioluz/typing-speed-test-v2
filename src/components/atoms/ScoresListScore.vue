<template>
  <li class="score">
    <ul class="score-details">
      <li class="score-detail" data-test="score-name">Imię: {{ score.name }}</li>
      <li class="score-detail">Dokładność(%): {{ score.accuracy }}</li>
      <li class="score-detail">Znaki/minutę: {{ score.characters }}</li>
      <li class="score-detail">Słowa/minutę: {{ score.words }}</li>
    </ul>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    score: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.score-details {
  display: flex;
}

.score-detail {
  margin-right: 1rem;
  flex-basis: 25%;
  flex-shrink: 0;
}
</style>
