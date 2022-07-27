<script setup lang="ts">

import { ref } from "vue";

// store
import useDarkmode from "@/stores/darkmode";
import useReduceMotion from "@/stores/reduceMotion";

// component
import MenuComponent from "@/components/MenuComponent.vue";


const darkmode = useDarkmode();
const reduceMotion = useReduceMotion();

const menuItems = ref([]);
const menuImage = ref("");

</script>


<template>
  <div
    :dark="darkmode.value"
    :reduce="reduceMotion.value"
  >
    <router-view id="page" />

    <menu-component
      :items="menuItems"
      :image="menuImage"
    />
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/main.scss";


#page {
  position: absolute;
  inset: 0;

  background-color: var(--bgColor1);
  z-index: -999;
}
</style>
