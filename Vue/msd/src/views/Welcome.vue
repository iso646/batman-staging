<template>
  <div class="welcome">
    <img alt="Insight Global" src="../assets/images/ig-logo.png">
    <Intro msg="Welcome to Your Vue.js App"/>
     <vs-button vs-type="filled">Primary</vs-button>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Splash/Intro.vue'

export default {
  name: 'welcome',
  components: {
    Intro
  }
}
</script>