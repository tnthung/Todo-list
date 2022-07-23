<script setup lang="ts">

const { base, icon, text, to } =
  defineProps(["base", "icon", "text", "to"]);

</script>


<template>
  <router-link v-if="to != null" :to="to">
    <div :style="`--base: ${base}`" class="menuItemComponent">
      <div class="iconContainer">
        <i :class="icon" />
      </div>
      <div class="text">
        {{ text }}
      </div>
    </div>
  </router-link>

  <div v-else :style="`--base: ${base}`" class="menuItemComponent">
    <div class="iconContainer">
      <i :class="icon" />
    </div>
    <div class="text">
      {{ text }}
    </div>
  </div>
</template>


<style scoped>
.menuItemComponent {
  position: relative;

  cursor: pointer;

  display: flex;
  flex-direction: row;

  width: calc(var(--base)*7.5);
  height: calc(var(--base)*2);

  margin: calc(var(--base)/4);

  border-radius: var(--base);

  background-color: var(--bg1);

  filter: drop-shadow(0 0 calc(var(--base)/7) var(--shadow1));

  transition: 0.25s;
}

.menuItemComponent:hover {
  filter: drop-shadow(0 0 calc(var(--base)/4) var(--shadow1));
}

.menuItemComponent .iconContainer {
  position: relative;

  width: calc(var(--base)*1.5);
  height: calc(var(--base)*1.5);

  margin: calc(var(--base)*0.25);

  font-size: var(--base);
  color: var(--bg1);

  border-radius: 50%;

  background-color: var(--menuBullet);
}

.menuItemComponent .iconContainer i {
  position: absolute;

  inset: 0 0 0 0;
  margin: auto;

  line-height: calc(var(--base)*1.5);
  text-align: center;
}

.menuItemComponent .text {
  position: relative;

  padding-left: calc(var(--base)*0.3);

  font-size: calc(var(--base)*0.75);
  
  line-height: calc(var(--base)*2);

  /* background-color: darkblue; */
}

a {
  all: unset;
}

</style>
