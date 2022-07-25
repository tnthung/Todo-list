<script setup lang="ts">

</script>


<template>
  <div class="overlay" />
</template>


<style scoped lang="scss">
@import "@/assets/main.scss";

.overlay {
  background-color: black;

  [dark=true] & {
    background-color: white;
  }

  position: absolute;
  inset: 0px;
  opacity: 15%;
}
</style>
