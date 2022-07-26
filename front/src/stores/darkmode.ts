import { defineStore } from "pinia"


export default defineStore({
  id: "darkmode",

  state: () => {
    const dark =
      localStorage.getItem("Todoo.dark") === "true" ??
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return { value: dark };
  },

  actions: {
    toggle() {
      this.value = !this.value;

      localStorage.setItem(
        "Todoo.dark",
        this.value.toString()
      );
    },
  },
});
