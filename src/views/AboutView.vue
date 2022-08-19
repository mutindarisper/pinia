<template>
  <div class="about">
    <h1>About</h1>
    <button
     class="counter-button"
     @click="storeCounter.increaseCount">
     {{storeCounter.count}}
    </button>
  </div>
</template>


<script setup>
import { useCounterStore } from '../stores/counter';

const storeCounter = useCounterStore()
</script>


<style scoped>
.counter-button{
  font-size: 50px;
}
</style>


