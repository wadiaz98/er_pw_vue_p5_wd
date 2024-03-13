<template>
  <div class="formulario">
    <form v-if="crear" class="form">
      <h2>Producto</h2>
      <p type="Código de barras">
        <label>{{ codigo }}</label>
      </p>
      <p type="Nombre">
        <input type="text" v-model="nombre" placeholder="Inserte el nombre" />
      </p>
      <p type="Stock">
        <input type="number" v-model="stock" placeholder="Inserte el stock" />
      </p>
      <p type="Fecha de caducidad">
        <input
          type="datetime-local"
          v-model="fechaCaduca"
          placeholder="Inserte el código"
        />
      </p>
      <button @click="actualizar">Actualizar</button>
    </form>
  </div>
</template>

<script>
import {
  actualizarFachada,
  consultarFachada,
} from "@/helpers/clienteProducto.js";
export default {
  props: {
    url: {
      type: String,
      required: true,
      default: null,
    },
  },
  data() {
    return {
      codigo: null,
      nombre: null,
      stock: null,
      fechaCaduca: null,
      crear: false,
    };
  },
  updated: function () {
    this.obtener();

  },
  methods: {
    async obtener() {
      if (this.url !== null) {
        this.crear = true;
        const data = await consultarFachada(this.url);
        this.codigo = data.codigo;
        this.nombre = data.nombre;
        this.stock = data.stock;
        this.fechaCaduca = data.fechaCaduca;
      }
    },
    async actualizar() {
      const body = {
        codigo: this.codigo,
        nombre: this.nombre,
        stock: this.stock,
        fechaCaduca: this.fechaCaduca,
      };
      await actualizarFachada(body);
      console.log("se inserto");
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  align-items: center;
}

p:before {
  content: attr(type);
  display: block;
  font-weight: bold;
  font-size: 16px;
}
input {
  width: 170px;
  text-align: center;
  border: none;
  border-bottom: 2px solid black;
  border-radius: 8px;
  padding: 5px;
}
input:focus {
  border-bottom: 3px solid black;
}
.formulario {
  display: grid;
  justify-content: center;
  align-items: center;
}
.form {
  background: beige;
  width: 350px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  box-shadow: 0px 0px 40px -10px;
}
button {
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
}
button:hover {
  background: gainsboro;
}
label {
  padding: 5px;
  border-radius: 10px;
  border: none;
  border-bottom: 1px solid black;
}
</style>