<!-- src/App.vue -->
<template>
  <div id="app">
    <!-- Menú de Navegación -->
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/informacion">     Informacion</router-link>
      <router-link to="/ayuda">      Ayuda</router-link>
      <router-link to="/direccion">     Direccion</router-link>
    </nav>

    <!-- Contenido de la Página -->
    <router-view></router-view>

    <!-- Pie de Página -->
    <footer>
      <p>&copy; 2023 Medioambiente, Bosques y agricultura
Incendios Forestales
 </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  background-color: #f8f8f8;
  padding: 20px;
}

nav {
  margin-bottom: 20px;
}

nav router-link {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
}
</style>
