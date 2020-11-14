<template>
  <div id="app">
    <Header />
    <TestZone />
    <Instructions />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/organisms/Header.vue";
import TestZone from "./components/organisms/TestZone.vue";
import Instructions from "./components/molecules/Instructions.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    TestZone,
    Instructions,
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Oswald", sans-serif;
  font-weight: lighter;
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;
  word-spacing: 1px;
}

li,
ul {
  padding: 0;
}

#app {
  height: 100vh;
  background-color: rgb(239, 239, 239);
}

/*ANIMACJE*/

.scale-enter-active {
  animation: scale-in ease-in 0.3s;
}

.scale-leave-active {
  animation: scale-out ease-out 0.3s;
}

@keyframes scale-in {
  from {
    transform: scale(1.1);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes scale-out {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(1.1);
    opacity: 0;
  }
}

.fade-enter-active {
  animation: fade-in 0.5s ease-in;
}

.fade-leave-active {
  animation: fade-out 0.5s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes blur {
  0% {
    text-shadow: 0 0 3px #ff7590;
  }
  50% {
    text-shadow: 0 0 10px yellow;
  }
  100% {
    text-shadow: 0 0 3px #ff7590;
  }
}
</style>
