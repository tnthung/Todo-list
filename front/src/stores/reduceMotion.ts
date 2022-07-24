import { defineStore } from "pinia"


export default defineStore({
  id: "reduceMotion",

  state: () => {
    const reduce =
      localStorage.getItem("Todoo.reduce") === "true" ??
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    return { value: reduce };
  },

  getters: {
    class: (s) => s.value ? "reduced" : "",
  },

  actions: {
    toggle() {
      this.value = !this.value;

      localStorage.setItem(
        "Todoo.reduce",
        this.value.toString()
      );
    },
  },
});
