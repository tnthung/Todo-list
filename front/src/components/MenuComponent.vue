<script setup lang="ts">
/**
 *  Fields:
 *    image:
 *      The image of the user avatar.
 * 
 *    items:
 *      The items of the menu with given props.
 */

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
      <img class="avatar" :src="image || '../../greenGuy.png'" alt="Avatar" @click.stop="opened = !opened" />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.light {
  .menuComponent {
    --overlayColor: black;

    --itemColor: var(--bgColor1);
    --fontColor: var(--fontColor1);
    --menuColor: var(--bgColor1);
    --shadowColor: var(--shadowColor1);

    --avatarBorder: #a0a0a0;

    --iconColor: #9e9e9e;
  }
}

.dark {
  @extend .light;

  .menuComponent {
    --overlayColor: white;
  }
}

.menuComponent {
  $base: 30px;

  @function base($scale: 1) {
    @return calc($base * $scale);
  }

  .outside {
    position: absolute;
    top: -100vh;
    left: -100vw;

    width: 200vw;
    height: 200vh;

    opacity: 0.25;
    background-color: var(--overlayColor);
  }

  /* Item */

  .menu {
    position: absolute;
    top: base(-0.25);
    right: base(-1.75);

    width: base(8);
    height: calc(base(2) * (var(--count) + 1) + base(0.15));

    filter: drop-shadow(0 0 base(0.125) var(--shadow1));

    border-radius: base();

    overflow: hidden;

    background-color: var(--menuColor);
  }

  .itemContainer {
    position: absolute;
    top: base(2);
    left: 0px;

    width: base(8);
    height: calc(base(2) * var(--count));

    display: flex;
    flex-direction: column;
  }

  .item {
    position: relative;

    width: base(7.5);
    height: base(1.8);
    margin: auto base(0.25);

    display: flex;

    border-radius: base();

    background-color: var(--itemColor);

    transition: 0.25s;

    cursor: pointer;

    &:hover {
      filter: drop-shadow(0 0 base(0.125) var(--shadow1));
    }
  }

  /* Icon */

  .iconContainer {
    position: relative;

    width: base(1.8);
    height: base(1.8);

    font-size: base();

    margin: 0 base(0.125);
  }

  .icon {
    position: absolute;
    inset: 0 0 0 0;

    margin: auto;

    line-height: base(1.8);
    text-align: center;

    color: var(--iconColor);
  }

  /* Text */

  .text {
    position: relative;

    line-height: base(1.8);

    font-size: base(0.75);
    color: var(--fontColor);
  }

  /* Avatar */

  .avatar {
    position: absolute;
    top: 0px;
    left: 0px;

    width: base(1.5);
    height: base(1.5);

    outline: 3px solid var(--avatarBorder);

    border-radius: base();

    transition: 0.05s;

    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      filter: drop-shadow(0 0 base(0.125) var(--shadow1));
    }
  }

  .menu-enter-active,
  .menu-leave-active {
    transition: 0.25s;
  }

  .menu-enter-from,
  .menu-leave-to {
    transform: translate(base(-1), base());
    opacity: 0;
    width: 0px;
    height: 0px;
  }

  /* Switch */

  .switch {
    position: absolute;
    top: base(0.5);
    left: base(0.5);
  }

  /* ------ */

  a {
    all: unset;
  }
}
</style>
