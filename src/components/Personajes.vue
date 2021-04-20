<template>
  <div>
    <div class="grid-personajes">
      <div
        class="personaje"
        v-for="(personaje, index) in personajesSW.results"
        :key="index"
      >
        <button @click.prevent="infoPersonaje(personaje)">
          <div>
            <h1>{{ personaje.name }}</h1>
          </div>
        </button>
      </div>
    </div>
    <div class="pagination">
      <button @click.prevent="prevPage()" class="button" :disabled="page === 1">
        Anterior
      </button>
      <button @click.prevent="nextPage()" class="button">Siguiente</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Personajes",
  data() {
    return {
      page: 1
    };
  },
  methods: {
    infoPersonaje(index) {
      this.$router.push("/about");
      this.$store.commit("InfoPersonaje", index);
      console.log(index)

    },
    nextPage() {
      this.page++;
      this.$store.dispatch("getPersonajes", this.page);
    },
    prevPage() {
      if (this.page >= 2) {
        this.page--;
        this.$store.dispatch("getPersonajes", this.page);
      }
    },
  },
  computed: {
    ...mapState(["personajesSW", "page", "url"]),
  },
  async mounted() {
    console.log(this.personajesSW);
    try {
      await this.$store.dispatch("getPersonajes", this.page);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal {
  width: 50vh;
  height: 200px;
  background-color: yellow;
  color: black;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: absolute;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  border-radius: 50px;
}

button {
  appearance: none;
  outline: none;
  border: none;
  background-color: transparent;
  color: white;

  &:hover {
    color: black;
  }
}
.grid-personajes {
  margin-top: 20rem;
  padding: 0rem 10rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;

  .personaje {
    padding: 3rem;
    border: 1px solid yellow;
    border-radius: 20px;
    display: grid;
    place-items: center;

    &:hover {
      background-color: yellow;
      color: black;
      cursor: pointer;
      transition: 0.4s;
      box-shadow: 0px 0px 20px yellow;
    }
  }
}

.pagination {
  margin-top: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  border: 1px solid yellow;
  outline: none;
  background-color: yellow;
  padding: 1rem 8rem;
  color: black;
  margin-left: 1rem;
  font-family: "ZenDots";

  &:hover {
    background-color: rgb(216, 216, 0);
  }

  &:nth-child(1) {
    border-radius: 20px 0px 0px 20px;
  }

  &:nth-child(2) {
    border-radius: 0px 20px 20px 0px;
  }
}
</style>
