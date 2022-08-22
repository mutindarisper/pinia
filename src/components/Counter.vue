<template>
   <div class="count">
      {{ storeCounter.count}} <br>
      {{storeCounter.selected_country}}
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