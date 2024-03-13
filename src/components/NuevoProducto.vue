<template>
  <div class="container">
    <h1 v-if="msf">Se ha insertado correctamente el producto</h1>
    <div class="formulario">
    <form class="form">
        <h2>Producto</h2>
      <p type="Código de barras">
        <input
          @click="resetea"
          type="text"
          v-model="codigo"
          placeholder="Inserte el código"
        />
      </p>
      <p type="Nombre">
        <input
          @click="resetea"
          type="text"
          v-model="nombre"
          placeholder="Inserte el nombre"
        />
      </p>
      <p type="Stock">
        <input
          @click="resetea"
          type="number"
          v-model="stock"
          placeholder="Inserte el stock"
        />
      </p>
      <p type="Fecha de caducidad">
        <input
          @click="resetea"
          type="datetime-local"
          v-model="fechaCaduca"
          placeholder="Inserte la fecha de caducidad"
        />
      </p>
      <button @click="guardar">Guardar</button>
    </form>
  </div>
  </div>
  
</template>

<script>
import { guardarFachada } from "@/helpers/clienteProducto.js";
export default {
  data() {
    return {
      codigo: null,
      nombre: null,
      stock: null,
      fechaCaduca: null,
      msf: false,
    };
  },
  methods: {
    async guardar() {
      const body = {
        codigo: this.codigo,
        nombre: this.nombre,
        stock: this.stock,
        fechaCaduca: this.fechaCaduca,
      };
      await guardarFachada(body);
      this.msf = true;
      this.codigo = null;
      this.nombre = null;
      this.stock = null;
      this.fechaCaduca = null;
      console.log("se inserto");
    },
    resetea() {
      this.msf = false;
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
h1 {
  color: greenyellow;
}
</style>