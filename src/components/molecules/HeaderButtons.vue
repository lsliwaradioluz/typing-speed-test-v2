<template>
  <div class="header-buttons">
    <Button @click.native="openSaveScore" data-test="save-score-btn"
      >Zapisz wynik</Button
    >
    <Button @click.native="resetScore" data-test="reset-score-btn"
      >Powtórz test</Button
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "@/components/atoms/HeaderButton.vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  components: { Button },
  methods: {
    ...mapMutations(["openSaveScore", "resetScore"]),
  },
});
</script>

<style lang="scss" scoped>
.header-buttons {
  padding-top: 2rem;
}
</style>
