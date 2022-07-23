<script setup lang="ts">

import { ref } from "vue";

import useDarkmode   from "./stores/darkmode";
import MenuComponent from "./components/MenuComponent.vue";

const darkmode = useDarkmode();

const x = ref(0);
const y = ref(0);

const place = () => {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  x.value = vw-215;
  y.value = 15;
};

place();
addEventListener("resize", () => place());

</script>


<template>
  <div id="page" :class="darkmode.class">
    <router-view class="main"/>
    <MenuComponent 
      :style="`--x: ${x}px; --y: ${y}px;`"
      class="menu"
    />
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

.main {
  position: absolute;
  inset: 0 0 0 0;
}

</style>
