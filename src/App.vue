<template>
  <div>
    <router-link class="btn btn-link" to="/">首页</router-link>
    <router-link class="btn btn-link" to="/fullstack0330">0330班</router-link>
    <router-link class="btn btn-link" to="/fullstack0526">0526班</router-link>
    <router-link class="btn btn-link" to="/staff">课程团队</router-link>
    <router-link class="btn btn-link"  to="/about">关于我们</router-link>
  </div>


  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
