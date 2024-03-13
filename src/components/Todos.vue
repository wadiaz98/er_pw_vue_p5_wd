<template>
  <div class="container">
    <h1 v-if="msj">Se ha eliminado exitosamente el Producto</h1>
    <button @click="consultar">Consultar</button>
    <div class="tabla">
      <table v-if="crea">
        <thead>
          <tr>
            <th>Código de barras</th>
            <th>Nombre</th>
            <th>Acción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody v-for="producto in productos" :key="producto.id">
          <tr>
            <td>{{ producto.codigo }}</td>
            <td>{{ producto.nombre }}</td>
            <td>
              <button @click="actualizar(producto.links[0]['href'])">
                Actualizar
              </button>
            </td>
            <td><button @click="eliminar(producto.links[0]['href'])">Eliminar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { todosFachada, eliminarFachada } from "@/helpers/clienteProducto";
export default {
  data() {
    return {
      productos: null,
      msj: false,
      crea:false,
    };
  },
    updated: function(){
        this.consultar()
    },
  methods: {
    async consultar() {
      this.productos = await todosFachada();
      console.log("aqui", this.productos);
      
      this.crea=true;
    },
    async eliminar(url) {
      await eliminarFachada(url);
      this.msj = true;
      console.log("url", url);
    },
    async actualizar(url) {
      console.log("emite", url);
      this.msj = false;
      this.$emit("url", url);
    },
  },
};
</script>

<style scoped>
.container{
    display: grid;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
}
.tabla{
    display: grid;
    justify-content: center;
    align-items: center;
}
table{
    margin-top: 20px;
    border-collapse: collapse;
    border: 1xp solid;
}
th{
    background: aquamarine;
    border: 1px solid;
    padding: 10px;
}
td{
    background: violet;
    border: 1px solid;
    padding: 10px;
}
button{
    border-radius: 10px;
    cursor: pointer;
}
button:hover{
    background: gainsboro;
}
h1{
    color: greenyellow;
}
</style>