<template>
  <div>
    <header>
      <img src="../assets/Star_Wars_Logo.svg" class="logo">
      <div class="titulo">
        <h1>PERSONAJES nuevo</h1>
      </div>
      <personajes/>
    </header>
  </div>
</template>

<script>
import Personajes from '@/components/Personajes.vue'
export default {
  name: 'Home',
  components: {
    Personajes
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
  color: white;

  .logo {
    position: absolute;
    top: 2rem;
    width: 20%;
  }

  h1 {
    position: absolute;
    top: 20rem;
    left: 0;
    right: 0;
    font-family: 'Zen-Dots';
    font-size: 4rem;
  }
}
</style>
