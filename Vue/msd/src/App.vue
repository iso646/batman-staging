<template>
  <div id="app">
    <nav class="main-nav">
      <div class="logo">INSIGHT GLOBAL</div>
      <Burger></Burger>
    </nav>
    <Sidebar>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/welcome">Welcome</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </Sidebar>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>

<script>
import Burger from './components/Menu/Burger.vue';
import Sidebar from './components/Menu/Sidebar.vue';

export default {
 name: 'app',
 components: {
   Burger,
   Sidebar
 }
}
</script>