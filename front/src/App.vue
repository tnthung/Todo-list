<script setup lang="ts">

import useDarkmode   from "./stores/darkmode";
const darkmode = useDarkmode();

</script>


<template>
  <router-view  
    :class="darkmode.class"
    id="page" 
  />
</template>


<style scoped>

#page {
  position: absolute;
  inset: 0 0 0 0;

  font-family: 'Roboto', sans-serif;
  color: var(--fontColor1);

  background-color: var(--bg1);
}

</style>
