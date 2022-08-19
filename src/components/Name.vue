<template>
   <div class="count">
      
      {{storeCounter.name}}
      <br>
       {{storeCounter.populateName}}

      <h3>{{}}</h3>
      
    </div>
  
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()

</script>

<style>

</style>