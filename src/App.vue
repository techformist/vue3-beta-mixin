<template>
  <div id="app">
    <h2>A Simple Demo of Mixin on Vue3 Beta</h2>

    <label for="name">Your name:</label>
    <input
      type="text"
      v-model="mixName"
      name="name"
      style="margin-top:3em;margin-left:5px"
    />

    <h5 style="margin-top:5em">
      This message is brought to you by the mixin..
    </h5>
    <q>Hello, {{ mixName }}</q>

    <h5 style="margin-top:5em">.. and so is this click</h5>
    <button @click="showAlert">Alert Me</button>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HelloMixin from "./mixins/HelloMixin.js";

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  mixins: [HelloMixin],
};
</script>

<style>
#app {
  font-family: "Segoe UI", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
