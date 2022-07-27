<script setup lang="ts">

import { ref } from 'vue';

import SwitchComponent from "./SwitchComponent.vue";
import OverlayComponent from "@/components/OverlayComponent.vue";

import useDarkmode from "@/stores/darkmode";
import useReduceMotion from "@/stores/reduceMotion";


const darkmode = useDarkmode();
const reduceMotion = useReduceMotion();


// Menu
enum MenuState {
  Normal,
  Extend,
  Expand,
}


const menuState = ref(MenuState.Normal);
const menuIsExtend = () => menuState.value === MenuState.Extend;
const menuIsExpand = () => menuState.value === MenuState.Expand;

const menuEnter = () => menuState.value = menuIsExpand()
  ? MenuState.Expand : MenuState.Extend;

const menuLeave = () => menuState.value = menuIsExpand()
  ? MenuState.Expand : MenuState.Normal;

const menuToggle = () => menuState.value = menuIsExpand()
  ? MenuState.Extend : MenuState.Expand;


const { items, image } =
  defineProps<{
    image: string;
    items: {
      to?: string;
      do?: () => any;

      icon: string;
      text: string;
    }[];
  }>()

</script>


<template>
  <overlay-component
    v-if="menuIsExpand()"
    class="overlay"
    @click="menuState = MenuState.Normal"
  />
  <div
    :style="`--count: ${items.length};`"
    :extend="menuIsExtend()"
    :expand="menuIsExpand()"
    class="menuContainer"
  >
    <div
      @mouseenter="menuEnter()"
      @mouseleave="menuLeave()"
      class="menu"
    >
      <!-- Top -->
      <div class="topContainer">
        <button
          @focusin="menuEnter()"
          @focusout="menuLeave()"
          class="avatarContainer"
          title="Avatar"
          type="button"
        >
          <img
            :src="image || '../greenGuy.png'"
            @click="menuToggle()"
            alt="Avatar"
          />
        </button>

        <transition name="switchs">
          <div
            v-if="menuIsExpand() || menuIsExtend()"
            class="switchContainer"
          >
            <switch-component
              :store="darkmode"
              title="Dark Mode"
              class="switch"
              height="30px"
              icon-on="fa-solid fa-moon"
              icon-off="fa-solid fa-sun"
            />

            <switch-component
              :store="reduceMotion"
              title="Reduce Motion"
              class="switch"
              height="30px"
              icon-on="fa-solid fa-ban"
              icon-off="fa-solid fa-spinner"
            />
          </div>
        </transition>
      </div>

      <!-- Items -->
      <transition name="items">
        <nav
          v-if="menuIsExpand()"
          class="itemContainer"
        >
          <router-link
            v-for="item in items"
            :to="item.to || ''"
            @click="item.do?.()"
            class="item"
          >
            <div class="iconContainer">
              <i :class="item.icon" />
            </div>
            <p class="text normFont">{{ item.text }}</p>
          </router-link>
        </nav>
      </transition>

      <!-- Background -->
      <div class="menuBackground" />
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "@/assets/main.scss";

.overlay {
  z-index: -2;
}

.menuContainer {
  $base: 30px;

  @function base($scale: 1) {
    @return calc($base * $scale);
  }


  --menuColor: #eeeeee;
  --itemColor: var(--bgColor2);

  [dark=true] & {
    --menuColor: #2e2e2e;
  }


  $w: base(8);
  $h: calc(base(2) * (1 + var(--count)));
  @include dim($w, $h);

  position: absolute;
  top: 15px;
  right: 15px;

  .menu {
    position: absolute;
    top: 0px;
    right: 0px;

    @include dim(base(2));
    border-radius: base();
    overflow: hidden;

    box-shadow: 0 0 5px var(--shadowColor1);

    transition-duration: 0.25s;
  }

  &[extend=true] {
    .menu {
      width: 100%;
    }
  }


  &[expand=true] {
    @extend [extend=true];

    .menu {
      height: 100%;
    }
  }

  // Background
  .menuBackground {
    position: absolute;
    top: 0px;
    right: 0px;

    @include dim(100%);
    border-radius: base();

    overflow: hidden;
    background-color: var(--menuColor);

    transition: 0.25s;

    z-index: -1;
  }

  // Quick options
  .topContainer {
    position: absolute;
    top: 0px;
    right: 0px;

    @include dim($w, $h);

    .avatarContainer {
      position: absolute;
      top: 0px;
      right: 0px;

      @include unButton;
      @include dim(base(1.6));

      margin: base(0.2);

      img {
        position: absolute;
        inset: 0;

        @include dim(100%);
        border-radius: base();

        transition-duration: 0.25s;

        cursor: pointer;
        user-select: none;

        &:hover {
          transform: scale(1.1);
          box-shadow: 0 0 5px var(--shadowColor1);
        }
      }
    }

    .switchContainer {
      position: absolute;
      top: 0;
      left: 0;

      height: base(2);

      display: flex;
      flex-direction: row;

      .switch {
        position: relative;
        margin-left: base(0.5);
      }
    }

    .switchs-move,
    .switchs-enter-active,
    .switchs-leave-active {
      transition: 0.25s ease-in-out;
    }

    .switchs-enter-from,
    .switchs-leave-to {
      transform: translateX(40px);
    }
  }

  // Item options
  .itemContainer {
    position: relative;

    height: calc(100% - base(2));
    margin-top: base(2);

    padding-left: base(0.1);

    display: flex;
    flex-direction: column;

    .item {
      position: relative;

      height: base(2);

      display: flex;
      flex-direction: row;

      @include unLink;

      transition-duration: 0.25s;

      &:hover {
        transform: translateX(base(0.5));
        --itemColor: var(--bgColor3);
      }
    }

    .iconContainer {
      $s: 1;
      $p: calc((2 - $s)/2);

      @include dim(base($s));
      margin: base($p);

      i {
        line-height: base($s);
        font-size: base($s);
        color: var(--itemColor);
      }
    }

    .text {
      margin: unset;
      line-height: base(2);
      font-size: base(0.75);
      font-weight: 600;
      text-align: center;
      color: var(--itemColor);
    }
  }
}
</style>
