<script setup>
  import{reactive} from 'vue';

    const estado = reactive({
      numeroum:0,
      numerodois:0,
      operacao:'+',
      resultado:0
    });

    const CalcularResultado = () =>{
      switch(estado.operacao){
        case '+':
          estado.resultado = estado.numeroum + estado.numerodois;
          break;
        case '-':
          estado.resultado = estado.numeroum - estado.numerodois;
          break;
        case '*':
          estado.resultado = estado.numeroum * estado.numerodois;
          break;
        case '/':
          estado.resultado = estado.numeroum / estado.numerodois;
          break;
      }
    }
</script>

<template>
  <div class="container" >
  <h1 class="p-5 mt-1 d-flex justify-content-center  bg-dark bg-gradient rounded-3" style="color: aliceblue;">Calculadora Aritimetica</h1>

  <div class="row">
    <input class="col-4 m-1" type="number" v-model="estado.numeroum" @input="CalcularResultado">
    <select class="col-1 m-1" v-model ="estado.operacao" @change="CalcularResultado">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    <input class="col-4 m-1" type="number"  v-model="estado.numerodois" @input="CalcularResultado">
    <span class="col-2 "  id="resultado"><h1> = {{estado.resultado}}</h1></span>
  </div>
  </div>
</template>
<style scoped>

</style>
