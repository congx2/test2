<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <!-- 1234 -->
    <markdown :markdown="mdtxt"></markdown>
  </div>
</template>

<script>
import Markdown from "@/components/markdown";
import mdtxt from "@/components/markdown/demo.md";
// import mdtxt from "../README.md";

export default {
  name: "app",
  components: { Markdown },
  directives: {},

  computed: {
    mdtxt() {
      return mdtxt;
    },
  },
  created() {},
  mounted() {
    console.log("mounted process.env: ", process.env);
  },
  beforeDestroy() {
    // this.sr.destroy()
  },
  methods: {
    random(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    },
    color() {
      const cs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
      const max = cs.length - 1;
      const hex = "ffffff";
      const list = hex.split("").map(() => {
        return cs[this.random(0, max)];
      });
      return "#" + list.join("");
    },
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
}
</style>
