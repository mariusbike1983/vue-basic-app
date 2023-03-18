<script setup lang="ts">import { ref } from 'vue';
import { LoadingResult } from './types/LoadingResult';

const isErr = ref(((window as any).data as LoadingResult).err);

</script>

<template>
  <div v-if="isErr" class="error">{{ isErr }}</div>
  <div v-else>
    <nav>
      <router-link to="/">Todo List</router-link> |
      <router-link to="/manage">Manage todo list</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.error {
  background-color: red;
  color: white;
  font-weight: 400;
  font-size: larger;
}

</style>
