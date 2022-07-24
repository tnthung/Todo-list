<script setup lang="ts">

import { ref } from "vue";
import MenuComponent from "@/components/MenuComponent.vue";


const items = ref([
  {
    to: "home",
    icon: "fa-solid fa-gear",
    text: "Settings"
  },
  {
    do: () => console.log("hello"),
    icon: "fa-solid fa-folder",
    text: "Projects"
  },
  {
    to: "home",
    do: () => console.log("hi"),
    icon: "fa-solid fa-folder",
    text: "Projects"
  },
]);

</script>


<template>
  <div class="page">
    <MenuComponent class="menu" :items="items" />
  </div>
</template>


<style scoped>
.page {
  position: absolute;
  inset: 0 0 0 0;
}

.menu {
  position: fixed;
  top: 30vh;
  left: 55vw;
}
</style>
