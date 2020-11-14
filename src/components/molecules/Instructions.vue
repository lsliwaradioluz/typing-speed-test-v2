<template>
  <div class="instructions">
    <ol data-test="instructions-list">
      <Instruction v-for="(instruction, index) in instructions" :key="index">
        {{ instruction }}
      </Instruction>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Instruction from "@/components/atoms/InstructionsListItem.vue";

interface Data {
  instructions: string[];
}

export default Vue.extend({
  components: { Instruction },
  data(): Data {
    return {
      instructions: [
        "Kliknij na białe pole z czarnym tekstem, aby aktywować kursor",
        "Uruchom zegar, wpisująć pierwszą literę",
        "Po wpisaniu wszystkich liter danego słowa, zatwierdź spacją",
        "Źle wpisane słowa możesz edytować, o ile nie zatwierdziłeś ich spacją",
        "Nie ma punktów ujemnych za źle wpisane słowa. Po prostu nie liczą się one do wyniku",
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.instructions {
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 4vh;
}
</style>
