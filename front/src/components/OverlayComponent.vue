<script setup lang="ts">

</script>


<template>
  <div class="overlay" />
</template>


<style scoped lang="scss">
@import "@/assets/main.scss";

.overlay {
  background-color: black;

  .dark & {
    background-color: white;
  }

  position: absolute;
  inset: 0px;
  opacity: 20%;
}
</style>
