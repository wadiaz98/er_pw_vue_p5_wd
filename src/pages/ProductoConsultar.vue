<template>
  <Consultar @url="recibir"/>
  <Actualizar :url="datos"/>
</template>

<script>
import Consultar from '@/components/Todos.vue'
import Actualizar from '@/components/Actualizar.vue'
export default {

    components:{
        Consultar,
        Actualizar
    },
    data(){
        return{
            datos:null
        }
    },
    methods:{
        recibir(data){
            console.log('padre', data)
            this.datos = data;
        }
    }
}
</script>

<style>

</style>