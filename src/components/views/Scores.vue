<template>
  <div>
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

<style lang="scss" scoped></style>
