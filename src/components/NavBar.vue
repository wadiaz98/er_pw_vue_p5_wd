<template>
  <router-link to="/insertar">Insertar</router-link>
  <router-link to="/consultar">Consultar</router-link>
</template>

<script>
import router from '@/router/router'
export default {
    components:{
        router,
    }
}
</script>

<style scoped>
div a{
    padding: 10px;
    border: 1px solid black;
    margin: 0 10px;
    border-radius: 10px;
    background: purple;
    color: white;
}
.router-link-exact-focus{
    background: magenta;
}
</style>