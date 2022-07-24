<script setup lang="ts">
import { ref } from "vue";

import useDarkmode from "../stores/darkmode";
import SwitchComponent from "./SwitchComponent.vue";


const {
  image,
  items,

} = defineProps<{
  image?: string,
  items?: {
    do?: (...args: any[]) => any,
    to?: string,

    icon: string,
    text: string,
  }[],
}>();

const opened = ref(true);

const clickOutside = () => {
  opened.value = false;
};

</script>


<template>
  <div class="menuComponent">
    <!-- close menu when clicked outside -->
    <div v-if="opened" class="outside" @click.stop="clickOutside" />

    <div>
      <transition name="menu">
        <!-- selectable items -->
        <div v-if="opened" class="menu" :style="`--count: ${items?.length ?? 0};`">

          <!-- items -->
          <div class="itemContainer">

            <!-- item -->
            <router-link v-for="item in items ?? []" :to="{ name: item.to || '' }" @click="item.do" class="item">
              <div class="iconContainer">
                <i :class="`${item.icon} icon`" />
              </div>
              <div class="text">{{ item.text }}</div>
            </router-link>
          </div>

          <SwitchComponent class="switch" :store="useDarkmode()" height="30px" icon-on="fa-solid fa-moon"
            icon-off="fa-solid fa-sun" />
        </div>
      </transition>

      <!-- the avatar of the user -->
      <img class="avatar" :src="image || '../../greenGuy.png'" @click.stop="opened = !opened" />
    </div>
  </div>
</template>


<style scoped>
.light .menuComponent {
  --menuColor: #ffffff;
  --overlayColor: black;
  --itemColor: #cccccc;
  --avatarBorder: #8b8b8b;
  --iconColor: #8b8b8b;
  --fontColor: #8b8b8b;
}

.dark .menuComponent {
  --menuColor: #000000;
  --overlayColor: white;
  --itemColor: #444444;
  --avatarBorder: #000000;
  --iconColor: #444444;
  --fontColor: #444444;
}

.menuComponent {
  --base: 30px;

  --base2: calc(var(--base) * 2);
  --base8: calc(var(--base) * 8);

  --base0-1: calc(var(--base) * 0.1);
  --base0-5: calc(var(--base) * 0.5);
  --base1-5: calc(var(--base) * 1.5);
  --base1-8: calc(var(--base) * 1.8);
  --base7-5: calc(var(--base) * 7.5);

  --base0-15: calc(var(--base) * 0.15);
  --base0-25: calc(var(--base) * 0.25);

  --base0-125: calc(var(--base) * 0.125);

  --base-1: calc(var(--base) * -1);

  --base-0-5: calc(var(--base) * -0.5);

  --base-0-25: calc(var(--base) * -0.25);
  --base-1-75: calc(var(--base) * -1.75);
}

.menuComponent .outside {
  position: absolute;
  top: -100vh;
  left: -100vw;

  width: 200vw;
  height: 200vh;

  opacity: 0.25;
  background-color: var(--overlayColor);
}

/* Item */

.menuComponent .menu {
  position: absolute;
  top: var(--base-0-25);
  right: var(--base-1-75);

  width: var(--base8);
  height: calc(var(--base2) * (var(--count) + 1) + var(--base0-15));

  filter: drop-shadow(0 0 var(--base0-125) var(--shadow1));

  border-radius: var(--base);

  overflow: hidden;

  background-color: var(--menuColor);
}

.menuComponent .itemContainer {
  position: absolute;
  top: var(--base2);
  left: 0px;

  width: var(--base8);
  height: calc(var(--base2) * var(--count));

  display: flex;
  flex-direction: column;
}

.menuComponent .item {
  position: relative;

  width: var(--base7-5);
  height: var(--base1-8);
  margin: auto var(--base0-25);

  display: flex;

  border-radius: var(--base);

  background-color: var(--itemColor);

  transition: 0.25s;

  cursor: pointer;
}

.menuComponent .item:hover {
  filter: drop-shadow(0 0 var(--base0-125) var(--shadow1));
}

/* Icon */

.menuComponent .iconContainer {
  position: relative;

  width: var(--base1-8);
  height: var(--base1-8);

  font-size: var(--base);

  margin: 0 var(--base0-125);
}

.menuComponent .icon {
  position: absolute;
  inset: 0 0 0 0;

  margin: auto;

  line-height: var(--base1-8);
  text-align: center;

  color: var(--iconColor);
}

/* Text */

.menuComponent .text {
  position: relative;

  line-height: var(--base1-8);

  font-size: calc(var(--base)*0.75);
  color: var(--fontColor);
}

/* Avatar */

.menuComponent .avatar {
  position: absolute;
  top: 0px;
  left: 0px;

  width: var(--base1-5);
  height: var(--base1-5);

  outline: 3px solid var(--avatarBorder);

  border-radius: var(--base);

  transition: 0.05s;

  cursor: pointer;
}

.menuComponent .avatar:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0 var(--base0-125) var(--shadow1));
}

.menuComponent .menu-enter-active,
.menuComponent .menu-leave-active {
  transition: 0.25s;
}

.menuComponent .menu-enter-from,
.menuComponent .menu-leave-to {
  transform: translate(var(--base-1), var(--base));
  opacity: 0;
  width: 0px;
  height: 0px;
}

/* Switch */

.menuComponent .switch {
  position: absolute;
  top: var(--base0-5);
  left: var(--base0-5);
}

/*  */

a {
  all: unset;
}
</style>
