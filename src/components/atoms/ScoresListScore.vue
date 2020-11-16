<template>
  <li class="score">
    <ul>
      <li v-for="(data, key) in score" :key="key">{{ key }}: {{ data }}</li>
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

<style lang="scss" scoped></style>
