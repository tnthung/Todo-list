<script setup lang="ts">

import { useRouter } from "vue-router";
import useDarkmode from "./stores/darkmode";
const darkmode = useDarkmode();

const router = useRouter();
router.push({
  name: "TEST"
});

</script>


<template>
  <router-view :class="darkmode.class" id="page" />
</template>


<style scoped lang="scss">
#page {
  font-family: 'Roboto', sans-serif;
  background-color: var(--bg1);
}
</style>
