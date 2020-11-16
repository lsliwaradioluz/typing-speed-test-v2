<template>
  <router-link :to="to" tag="li" class="link" exact>
    <slot />
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
 .link {
   list-style-type: none;
   margin-right: 1rem;
   cursor: pointer;
   font-size: 18px;
   font-weight: 600;
   letter-spacing: .8px;
 }

 .router-link-active {
   text-decoration: underline;
 }
</style>
