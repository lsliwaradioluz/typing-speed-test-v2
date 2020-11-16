<template>
  <div class="scores">
    <ScoresList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ScoresList from "@/components/molecules/ScoresList.vue";

export default Vue.extend({
  components: { ScoresList },
});
</script>

<style lang="scss" scoped>
  .scores {
    padding: 5rem 1rem;
  }
</style>
