<script setup lang="ts">

import { ref } from "vue";

import useDarkmode   from "./stores/darkmode";
import MenuComponent from "./components/MenuComponent.vue";

const darkmode = useDarkmode();

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

const x = ref(vw-215);
const y = ref(15);

</script>


<template>
  <div id="page" :class="darkmode.class">
    <MenuComponent 
      :style="`--x: ${x}px; --y: ${y}px;`"
      class="menu"
    />
    <router-view />
  </div>
</template>


<style scoped>

#page {
  position: absolute;
  inset: 0 0 0 0;

  font-family: 'Roboto', sans-serif;
  color: var(--font1);

  background-color: var(--bg1);
}

.menu {
  position: absolute;
  top : var(--y);
  left: var(--x);
}

</style>
