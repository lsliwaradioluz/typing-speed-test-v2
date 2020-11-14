<template>
  <li class="instruction-list-item">
    <slot>Defaultowy tekst slotowy</slot>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.instruction-list-item {
  list-style-type: none;
}
</style>
