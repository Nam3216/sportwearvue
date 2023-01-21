<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar/Navbar.vue';
import Footer from "./components/Footer/Footer.vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
</script>

<template>
 
  <header>
   
  <Navbar/>
  </header>
 <div class="all">
  <RouterView />
</div>
<Footer/>
</template>

<style scoped>

.all {
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 120px;
  min-height: 600px;
}

</style>
