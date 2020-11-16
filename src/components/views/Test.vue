<template>
  <div>
    <Header />
    <TestZone />
    <Instructions />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../organisms/Header.vue";
import TestZone from "../organisms/TestZone.vue";
import Instructions from "../molecules/Instructions.vue";

export default Vue.extend({
  components: { Header, TestZone, Instructions },
});
</script>

<style lang="scss" scoped>
</style>
