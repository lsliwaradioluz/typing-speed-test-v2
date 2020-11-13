<template>
  <div class="header-word-data">
    <h2 class="number">{{ number }}</h2>
    <p class="caption">
      {{ caption }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    number: {
      type: Number,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.header-word-data {
  text-align: center;
  color: white;
}

.number {
  font-size: 3rem;
}

.caption {
  font-size: 0.9rem;
  text-transform: uppercase;
}
</style>
