<script setup lang="ts">

import { ref } from "vue";

import useDarkmode       from "../stores/darkmode";
import SwitchComponent   from "./SwitchComponent.vue";
import MenuItemComponent from "./MenuItemComponent.vue";


const open  = ref(false);
const dark  = useDarkmode();
const image = ref("../greenGuy.png");

type Item = {
  to?: string;
  do?: () => any;
  
  icon: string;
  text: string;
};

const buttons: Item[] = [
  {
    to  : "/",
    icon: "fa-solid fa-gear",
    text: "Settings",
  },
  {
    to  : "/",
    icon: "fa-solid fa-folder",
    text: "My projects",
  },
];

</script>


<template>
  <div class="menuComponent" :style="`--count: ${buttons.length}`">
    <div class="container">
      <transition name="menu">
        <div class="menu" v-if="open">
          <SwitchComponent 
            :store="dark"
    
            class="switch"
            height="40px"
            icon-on="fa-solid fa-moon"
            icon-off="fa-solid fa-sun"
          />

          <div class="items">
            <MenuItemComponent
              v-for="button in buttons"
              base="25px"
              :to   ="button.to"
              :icon ="button.icon"
              :text ="button.text"
              @click="button.do?.()"
            />
          </div>
        </div>
      </transition>

      <img 
        :src="image"
        @click="open=!open"

        alt="Avatar"
        class="avatar" 
      />
    </div>
  </div>
</template>


<style scoped>

.menuComponent {
  position: absolute;

  --base   : 25px;
  --base1_1: calc(var(--base)*1.1);
  --base2  : calc(var(--base)*2);
  --base2_5: calc(var(--base)*2.5);
  --base3  : calc(var(--base)*3);
  --base_2 : calc(var(--base)/2);
  --base_4 : calc(var(--base)/4);
  --base_6 : calc(var(--base)/6);
  --base_8 : calc(var(--base)/8);

  --w: calc(var(--base)*8);
  --h: calc(var(--base)*2.5*
    (var(--count) + 1));
}

.menuComponent .container {
  position: absolute;

  width : var(--w);
  height: var(--h);
}

.menuComponent .avatar {
  position: absolute;
  top: 0px;
  right: 0px;

  cursor: pointer;

  width : var(--base2);
  height: var(--base2);
  border-radius: var(--base);

  margin: var(--base_4);

  filter: drop-shadow(0 0 var(--base_6) var(--shadow1));

  transition: 0.25s;
}

.menuComponent .avatar:hover {
  transform: scale(1.05);
}

.menuComponent .switch {
  position: absolute;
  margin: var(--base_2) var(--base_2);
}

.menuComponent .menu {
  position: absolute;
  top  : 0px;
  right: 0px;

  width : var(--w);
  height: var(--h);

  filter: drop-shadow(0 0 var(--base_4) var(--shadow1));

  border-radius: var(--base1_1);

  overflow: hidden;

  background-color: var(--menuBg1);
}

.menuComponent .menu-enter-active,
.menuComponent .menu-leave-active {
  transition: 0.25s;
}

.menuComponent .menu-enter-from,
.menuComponent .menu-leave-to {
  width : 0px;
  height: 0px;

  transform: translate(
    calc(var(--base_2)*-1),
    var(--base_2)
  );
}

.menuComponent .items {
  position: absolute;

  top: calc(var(--base)*2.5);

  width: var(--w);
  height: var(--h);
  
  align-items: center;

  display: flex;
  flex-direction: column;
}

</style>
