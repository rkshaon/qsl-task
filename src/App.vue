<template>
  <NavBarComponent />
  <div class="container-fluid" >
    <router-view />
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'; 

export default {
  name: 'App',
  components: {
    NavBarComponent,
  }
}
</script>

<style>
</style>
