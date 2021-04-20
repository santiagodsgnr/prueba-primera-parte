<template>
  <div class="about">
    <div class="imagen">
      <img :src="image" class="image" />
    </div>
    <div class="texto">
      <h1>{{ infoPersonaje.name }}</h1>
      <div class="info">
        <h2>Año de nacimiento: {{ infoPersonaje.birth_year }}</h2>
        <h2>Género: {{ infoPersonaje.gender }}</h2>
        <h2>Número de películas: {{ infoPersonaje.films.length }}</h2>
        <p>
          {{descripcion}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "About",
  prps: ['name'],
  data() {
    return {};
  },
  computed: {
    ...mapState(["infoPersonaje"]),
    image() {
      if (this.infoPersonaje.url === "http://swapi.dev/api/people/1/") {
        return "https://static.wikia.nocookie.net/esstarwars/images/d/d9/Luke-rotjpromo.jpg/revision/latest?cb=20071214134433";
      } else if (this.infoPersonaje.url === "http://swapi.dev/api/people/2/") {
        return "https://i1.wp.com/thefwoosh.com/wp-content/uploads/2014/11/Revoltech-Revo-003-Star-Wars-C3P0-Promo.jpg";
      } else if (this.infoPersonaje.url === "http://swapi.dev/api/people/3/") {
        return "https://static.wikia.nocookie.net/esstarwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20150926172435";
      } else if (this.infoPersonaje.url === "http://swapi.dev/api/people/4/") {
        return "https://i.pinimg.com/originals/e9/c8/08/e9c808dfbd5e1dc4cac4fa7ffa5f47b4.jpg";
      } else if (this.infoPersonaje.url === "http://swapi.dev/api/people/5/") {
        return "https://static.wikia.nocookie.net/esstarwars/images/f/f1/Leia_Organa_TROS.png/revision/latest?cb=20200101060403";
      }
    },
    descripcion() {
      if (this.infoPersonaje.url === "http://swapi.dev/api/people/1/") {
        return "Luke Skywalker fue un humano sensible a la Fuerza y un Maestro Jedi quien, junto a su hermana gemela, la Princesa Leia Organa, luchó en contra del gobierno del Imperio Galáctico durante la Guerra Civil Galáctica. Hijo del Caballero Jedi Anakin Skywalker y de la Senadora Padmé Amidala de Naboo, Luke nació poco después del final de la Guerras Clon el 19 ABY.";
      } else if (this.infoPersonaje.url === "http://swapi.dev/api/people/2/") {
        return "C-3PO, a veces deletreado Cetrespeó y referido a menudo simplemente como Trespeó, era un droide de protocolo unidad 3PO diseñado para interactuar con seres orgánicos, programado principalmente para la etiqueta y el protocolo. Hablaba con fluidez más de siete millones de formas de comunicación, y desarrolló una personalidad exigente y propensa a las preocupaciones a lo largo de sus muchas décadas de operación.";
      } else if (this.infoPersonaje.url === "http://swapi.dev/api/people/3/") {
        return "R2-D2, pronunciado Artoo-Deetoo/Erredós-Dedós y a menudo referido como R2 (Artoo/Erredós), fue un droide astromecánico serie R2 manufacturado por Industrias Automaton con programación masculina. Un ingenioso y valiente droide, R2-D2 sirvió a una multitud de maestros a lo largo de su vida. R2 nunca recibió un borrado completo de memoria ni recibió programación nueva, lo que resultó en su actitud aventurera e independiente. ";
      } else if (this.infoPersonaje.url === "http://swapi.dev/api/people/4/") {
        return "Anakin Skywalker, un hombre humano sensible a la Fuerza, fue un Caballero Jedi de la República Galáctica y el Elegido de la Fuerza. Durante las Guerras Clon, sus logros como comandante en el campo de batalla le valieron el apodo del Héroe Sin Miedo. Después de pasar al lado oscuro de la Fuerza, se hizo conocido como Darth Vader, un Señor Oscuro de los Sith y aprendiz del Emperador Darth Sidious. ";
      } else if (this.infoPersonaje.url === "http://swapi.dev/api/people/5/") {
        return "Leia Organa, una mujer humana sensible a la Fuerza, fue una princesa de Alderaan, miembro del Senado Imperial, líder de la Alianza para Restaurar la República, miembro del Senado Galáctico y general de la Resistencia. Nacida junto a su hermano gemelo, Luke Skywalker en el año 19 ABY como Leia Amidala Skywalker, fue hija del Caballero Jedi Anakin Skywalker y de la Senadora Padmé Amidala de Naboo. Como resultado de la caída de su padre hacia el lado oscuro de la Fuerza, los hijos de Skywalker se separaron y Leia se convirtió en la hija adoptiva del Senador Bail Organa y su esposa, la Reina Breha Organa, que cambió su nombre a la Princesa Leia Organa.";
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
  color: white;

  .image {
    width: 50%;
  }

  .texto {
    padding: 0rem 8rem;
    text-align: left;
  }

  h1 {
    font-family: "ZenDots";
    font-size: 6rem;
    margin-bottom: 3rem;
    color: yellow;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.6rem;
  }
}
</style>
