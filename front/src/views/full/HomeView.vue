<script setup lang="ts">

</script>


<template>
  <div>
    <div class="test" />
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/main.scss";


.test {
  position: absolute;
  top: 50%;
  left: 50%;

  --h: max(25vh, 200px);
  --w: calc(var(--h) * 2);

  width: var(--w);
  height: var(--h);

  transform: translate(calc(-0.5 * var(--w)), calc(-0.5 * var(--h)));

  background-color: black;
}
</style>
