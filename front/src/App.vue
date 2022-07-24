<script setup lang="ts">

import { useRouter } from "vue-router";

import useDarkmode from "@/stores/darkmode";
import useReduceMotion from "@/stores/reduceMotion";


const darkmode = useDarkmode();
const reduceMotion = useReduceMotion();

const router = useRouter();
router.push({
  name: "TEST"
});

</script>


<template>
  <router-view
    :class="`${darkmode.class} ${reduceMotion.class}`"
    id="page"
  />
</template>


<style scoped lang="scss">
#page {
  font-family: 'Roboto', sans-serif;
  background-color: var(--bgColor1);
}
</style>
