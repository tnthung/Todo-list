<script setup lang="ts">

const { store, iconOn, iconOff, height } =
  defineProps(["store", "height", "iconOn", "iconOff"]);

</script>


<template>
  <div class="switchComponent" :style="`--h: ${height};`" @click="store.toggle">
    <div :class="`${store.value ? 'on' : ''} bullet`" />
    <div class="iconContainer">
      <i :class="`${iconOff} left`" />
      <i :class="`${iconOn} right`" />
    </div>
  </div>
</template>


<style scoped>

.switchComponent {
  position: absolute;
  top: 0px;
  left: 0px;

  cursor: pointer;

  background-color: var(--swContainer);

  --w: calc(var(--h)*1.8);
  --p: calc(var(--h)*0.1);
  --p2: calc(var(--p)*2);
  --f: calc(var(--h)*0.5);

  border-radius: calc(var(--h)/2);

  filter: drop-shadow(0 0 var(--p) var(--shadow1));

  width: var(--w);
  height: var(--h);
}

.switchComponent:hover {
  filter: drop-shadow(0 0 calc(var(--p)*1.5) var(--shadow1));
}

.switchComponent .bullet {
  position: absolute;
  top: 0px;
  left: 0px;

  width: calc(var(--h)*0.8);
  height: calc(var(--h)*0.8);

  background-color: var(--swBullet);

  margin: var(--p);
  border-radius: 50%;

  filter: drop-shadow(0 0 calc(var(--p) * 0.2) var(--shadow1));

  transition: 250ms;
}

.switchComponent .bullet.on {
  transform: translateX(calc(var(--h)*0.8));
}

.switchComponent .iconContainer {
  position: absolute;

  margin: var(--p2);

  width: calc(var(--w) - 2*var(--p2));
  height: calc(var(--h) - 2*var(--p2));

  display: flex;
  flex-direction: row;
  align-items: center;
}

.switchComponent .iconContainer i {
  width: var(--f);
  height: var(--f);

  text-align: center;

  font-size: var(--f);
  color: var(--swContainer);
}

.switchComponent .left {
  padding-left: calc(var(--h)*0.05);
}

.switchComponent .right {
  position: absolute;
  right: 0px;

  padding-right: calc(var(--h)*0.05);
}

</style>
