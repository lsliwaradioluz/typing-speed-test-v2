<template>
  <div class="test-zone"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    // disableKeys(event: KeyboardEvent) {
    //   if (event.key == "Enter") {
    //     event.preventDefault();
    //   } else if (
    //     event.code == "Space" &&
    //     this.$refs.input.innerHTML.length == 0
    //   ) {
    //     event.preventDefault();
    //   }
    // },
  },
});
</script>

<style lang="scss" scoped>
.test-zone {
  display: flex;
  height: 60px;
  background-color: white;
}
</style>
