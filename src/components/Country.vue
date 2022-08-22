<template>
<div class="country_container">

    <h3>Country child component</h3>

    <h2>{{storeCounter.selected_country}}</h2>
    <input type="text" v-model="storeCounter.selected_country">
    <!-- display count -->
   <!-- <p>{{storeCounter.count}}</p> -->
</div>
  
</template>

<script setup>
import {  useCounterStore } from '@/stores/counter';
const storeCounter = useCounterStore()

</script>

<style>

</style>