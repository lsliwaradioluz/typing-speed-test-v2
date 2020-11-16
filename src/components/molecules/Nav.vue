<template>
  <nav class="nav">
    <ul class="links">
      <NavLink v-for="(link, index) in links" :key="index" :to="link.to">
        {{ link.caption }}
      </NavLink>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import NavLink from "@/components/atoms/NavLink.vue";

export default Vue.extend({
  components: { NavLink },
  data() {
    return {
      links: [
        { caption: "Test", to: "/" },
        { caption: "Wyniki", to: "/scores" },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    background-color: transparent;
    padding: 1rem;
  }

  .links {
    display: flex;
  }
</style>
