<!-- src/components/Home.vue -->
<template>
  <div class="home-container">


    
    <div class="paragraph-container">
    <h1>Ayuda a los Afectados del Incendio Forestal</h1>
            <h2>Formulario de Voluntarios</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input v-model="name" type="text" id="name" required />
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="phone">Teléfono:</label>
        <input v-model="phone" type="tel" id="phone" required />
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="message">Mensaje adicional:</label>
        <textarea v-model="message" id="message"></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
        <h1>El Presidente destaca el trabajo de los bomberos forestales en el país</h1>

        <img src="imagenes/bom.jpg" width="800" height="300" alt="PHOTO1">

      <p>La Paz, 26 de noviembre de 2023 (AEP). – En el marco de la lucha contra los incendios que han afectado a la región, el presidente Luis Arce llegó ayer al amazónico municipio de Rurrenabaque para conocer de primera mano las operaciones destinadas a brindar apoyo a las familias afectadas a causa de las quemas.<p>
Durante su visita, el mandatario compartió un emotivo momento con los bomberos forestales, quienes se encuentran en la primera línea de combate contra el fuego que ha amenazado la biodiversidad de la zona.

</p>
En un gesto de profundo agradecimiento, el presidente Arce reconoció el inmenso esfuerzo y dedicación de estos héroes anónimos, quienes arriesgan sus vidas para preservar la flora y fauna amazónica del país.
<p>
“Tienen todo nuestro reconocimiento”, destacó el Presidente en un mensaje en la plataforma X, antes Twitter, en el que acompaña un vídeo en el que se lo ve almorzando con el equipo multinacional de bomberos, conversando con algunos de ellos y abrazando a otros.
</p>
<p>
El Plan Integral Posincendios que el Gobierno nacional ya ha preparado tiene como objetivo proporcionar ayuda inmediata y apoyo a las familias damnificadas por los incendios, abordando tanto las necesidades inmediatas como las de largo plazo.</p>
<p>
Se espera que este plan contribuya a la reconstrucción de las comunidades afectadas y a la restauración de los ecosistemas dañados</p>
<p>
La visita del Presidente al municipio amazónico, de acuerdo con autoridades locales, subraya el compromiso del Gobierno en la protección del medioambiente y la respuesta efectiva ante situaciones de emergencia.</p>
<p>
El Ejecutivo ha enfrentado los siniestros en coordinación con autoridades locales, organizaciones sociales y los más de 5.000 bomberos que combaten el fuego en la amplia geografía nacional.</p>
<h3>Ayuda humanitaria</h3>
<p>
El gobierno del presidente Luis Arce Catacora mantiene un trabajo de permanente atención a las zonas que fueron afectadas por los incendios en varias regiones del Estado Plurinacional de Bolivia.</p>
<p>
El viceministro de Defensa Civil, Juan Carlos Calvimontes, entregó ayer 15 toneladas (t) de ayuda humanitaria para 400 familias del municipio cruceño de San Matías afectadas por los incendios forestales.</p>
<p>
“Vamos a entregar aproximadamente 15 toneladas de ayuda humanitaria, que es parte de las actividades que venimos desarrollando. Esto va a ir para todas las familias que han sufrido por los incendios”, dijo en contacto con Bolivia TV.</p>
<p>
Explicó que esa ayuda humanitaria consiste en alimentos, principalmente fideo, arroz, harina, azúcar y aceite, para 400 familias de las comunidades “más alejadas” del municipio de San Matías, afectadas por los incendios forestales.</p>
<p>
El alcalde de San Matías, Carlos Velarde, será quien llegará hasta esas comunidades y entregará de manera oficial esa ayuda humanitaria a cada uno de los beneficiarios damnificados, enfatizó la autoridad.</p>
<p>
En tanto, Velarde agradeció al Gobierno nacional por esta “respuesta oportuna para ayudar a estas familias” afectadas por los incendios forestales a quienes también se suministró agua mediante cisternas.</p>
Junto a los incendios, Bolivia afronta desde hace varios meses una intensa sequía que afecta a gran parte de su territorio y que amenaza las provisiones de agua en algunas ciudades, mientras que en el campo el líquido es escaso para el ganado y la producción de alimentos. EFE
</p>
<p>
“Agradecemos por las gestiones que se han hecho a través del viceministerio. Son 400 familias que están alejadas del centro municipal, a 300 kilómetros de la zona del pantano, y han sido las más afectadas”, indicó.
</p>
    <img src="imagenes/ulti.jfif" width="800" height="300" alt="PHOTO1">

    </div>
        <table width="100%" border="0">
            <!-- FILA 1 -->
            <tr>
                <iframe width="750" height="403" src="https://www.youtube.com/embed/PHSFlgpJx5U" title="BOLIVIA | Los incendios llegan a las zonas indígenas | EL PAÍS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </tr>

            <tr>
                <img src="imagenes/ayu1.png" width="550" height="750" alt="PHOTO5">

            </tr>


            <!-- FILA 2 -->
            <tr>

                <img src="imagenes/ayu3.png" width="550" height="750" alt="PHOTO5">

            </tr>

        </table>
  </div>
  
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style>
/* Estilos para centrar el contenido */
.home-container {
  display: flex;
  justify-content: center;
  text-align: center;
}

.left-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-section {
  max-width: 800px; /* Ajusta según sea necesario */
  margin-left: 20px; /* Espacio entre las secciones */
}

.photo-box {
  margin-bottom: 10px; /* Espacio entre los cuadros de fotos */
}

/* Puedes agregar estilos específicos para la página de inicio aquí... */
</style>
