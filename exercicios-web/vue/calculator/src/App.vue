<template>
  <div id="app">
    <h1>Calculadora</h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from './main/Calculator'

export default {
  components: { Calculator }
}
</script>

<style>
@font-face {
  font-family: 'RobotoMono';
  src: url('./fonts/RobotoMono-Thin.ttf');
}

* {
  font-family: 'RobotoMono', monos;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-content: center;
  text-align: center;

  color: #fff;
  background: linear-gradient(to right, rgba(83, 108, 118), rgba(41, 46, 73));
}
</style>
