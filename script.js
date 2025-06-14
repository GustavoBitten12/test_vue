<!--
Diga "Hello World ou Olá Mundo" com a Vue!
-->

<script setup>
import { ref } from 'vue'

// A "ref" é uma fonte de dado reativa que guarda um valor.
// Tecnicamente, não precisamos envolver uma sequência de caracteres
// com ref() para exibe-la, mas veremos no próximo exemplo do porquê
// ser preciso caso alguma vez tencionamos mudar o valor.
const message = ref('Hello World!')
</script>

<template>
  <h1>{{ message }}</h1>
</template>