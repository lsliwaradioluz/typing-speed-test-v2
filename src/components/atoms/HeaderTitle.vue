<template>
  <h1 class="header-title">
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.header-title {
  text-align: center;
  font-size: 2.5rem;
  font-family: "Dosis", sans-serif;
  padding-bottom: 2vh;
  color: rgb(234, 42, 67);
  letter-spacing: -2px;
  animation: blur 3s infinite;
  text-transform: uppercase;
}
</style>
