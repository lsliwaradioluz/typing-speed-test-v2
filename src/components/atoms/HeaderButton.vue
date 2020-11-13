<template>
  <button class="header-button" type="button">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.header-button {
  cursor: pointer;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  transition: all 0.3s;
  margin: 0 0.25rem;
  outline: none;
  &:hover {
    border: 1px solid #ff7590;
    color: #ff7590;
  }
}
</style>
