<template>
   <div class="count">
      {{ storeCounter.count}}
      <br>
    
      
    </div>
</template>

<script setup>
// import { ref, computed } from 'vue';
import { useCounterStore } from '@/stores/counter'


const storeCounter = useCounterStore()


</script>

<style>

</style>