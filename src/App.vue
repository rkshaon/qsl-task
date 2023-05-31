<template>
  <NavBarComponent />
  <HomeComponent />  
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'
import NavBarComponent from './components/NavBarComponent.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
    NavBarComponent
  }
}
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
