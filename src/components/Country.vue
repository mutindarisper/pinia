<template>
<div class="country_container">

    <h3>Display selected country</h3>

    <h4>{{storeCounter.countries}}</h4>
    display count
   <p>{{storeCounter.count}}</p>
</div>
  
</template>

<script setup>
import {  useCounterStore } from '@/stores/counter';
const storeCounter = useCounterStore()

</script>

<style>

</style>