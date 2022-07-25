<script setup lang="ts">
/** 
 *  Fields:
 *    store:
 *      The pinia store which MUST containing `toggle` action 
 *      and `value` state to make the it work.
 *  
 *    height:
 *      The base unit of whole button, the height should be
 *      CSS style ex: `10px`, `2rem`.
 *  
 *    iconOn:
 *      The icon code of the service you are using. This icon
 *      will be shown when switch is on.
 *  
 *    iconOn:
 *      The icon code of the service you are using. This icon
 *      will be shown when switch is off.
 * 
 *  Style:
 *    --iconColor:
 *      The color of the icon on both ends.
 * 
 *    --shadowColor:
 *      The shadow color of the button body when hovering.
 * 
 *    --bulletColor:
 *      The color of the bullet.
 * 
 *    --containerColor:
 *      The color of the switch body.
*/

import type { Store } from 'pinia';


const { store, iconOn, iconOff, height } =
  defineProps<{
    store?: Store<
      any,
      { value: boolean },
      any,
      { toggle: () => any }
    >,
    height: string,
    iconOn?: string,
    iconOff?: string,
  }>();

</script>


<template>
  <button
    :style="`--base: ${height};`"
    @click="store?.toggle"
    class="switchComponent"
    title="switch"
    type="button"
  >
    <div class="container">
      <div :class="`${store?.value ? 'on' : ''} bullet`" />
      <div class="iconContainer">
        <i :class="`${iconOff} left`" />
        <i :class="`${iconOn} right`" />
      </div>
    </div>
  </button>
</template>


<style scoped lang="scss">
@import "@/assets/main.scss";


.light {
  .switchComponent {
    --iconColor: var(--containerColor);
    --shadowColor: var(--shadowColor1);
    --bulletColor: var(--bgColor1);
    --containerColor: var(--bgColor2);
  }
}

.dark {
  @extend .light;

  .switchComponent {}
}

.switchComponent {

  @function base($scale: 1) {
    @return calc(var(--base) * $scale)
  }

  position: absolute;
  background: none;
  border: none;
  padding: unset;

  .container {
    position: relative;
    @include dim(base(1.8), base());

    cursor: pointer;
    border-radius: base();
    background-color: var(--containerColor);

    transition: 0.15s;

    &:hover {
      box-shadow: 0 0 5px var(--shadowColor);
    }
  }

  .bullet {
    position: absolute;
    @include dim(base(0.8), base(0.8));
    margin: base(0.1);

    border-radius: base();
    background-color: var(--bulletColor);

    transition: 0.15s;
  }

  .bullet.on {
    transform: translateX(base(0.8));
  }

  .iconContainer {
    position: absolute;
    @include dim(base(1.6), base(0.8));
    margin: base(0.1);

    display: flex;
    flex-direction: row;

    border-radius: base();

    i {
      position: relative;
      @include dim(base(0.8), base(0.8));

      color: var(--iconColor);
      font-size: base(0.5);
      text-align: center;
      line-height: base(0.8);

      transition: 0.15s;
    }
  }
}
</style>
