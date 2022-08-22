<template>
  <div class="home">
   <Counter />
    <div class="buttons">
      <button @click="storeCounter.increaseCount">+</button>
      <button @click="storeCounter.decreaseCount">-</button>
    </div>
    <hr>
    <div>this counter is: {{storeCounter.oddOrEven}}</div>
  </div>
  <hr>
  <div>
    <h3>Edit Counter:</h3>
    <input 
    type="number"
    v-model="storeCounter.count">
    <br>
    <hr>

    <!-- <input type="text"
    v-model="storeCounter.populateName">

    <br>
    <br>
    <hr>
    <Name /> -->
  </div>
  <div class="selections">

    <select name="" id="" @input="storeCounter.showSelectedIndicator">

      <option v-for="indicator in storeCounter.handleIndicators" :key="indicator">{{indicator}}</option>
    
    </select>
    <hr>
    <br>
    <br>

     <select name="" id="" >

      <option v-for="sub_indicator in storeCounter.handleSubIndicators" :key="sub_indicator">{{sub_indicator}}</option>
    
    </select>

    <hr>
    <br>
    <br>

     <select name="" id="" @click="storeCounter.handleCountries" @change="storeCounter.showSelectedCountry" >
      <!-- @change="storeCounter.showSelectedCountry   @input="storeCounter.showSelectedCountry" -->
      <option v-for="country in storeCounter.countries" :key="country">{{country}}</option>
    </select>
    <br>
    


    <hr>
    <br>
    <br>
    <!-- <p>Showing the selected country in child component: Country.vue </p> -->
    <Country />

    
  </div>
</template>




<script setup>
// import { ref, computed } from 'vue';
// import {  watch } from 'vue';
import Counter from '@/components/Counter.vue';
import { useCounterStore } from '@/stores/counter'
import Name from '../components/Name.vue';
import Country from '../components/Country.vue';

// import { storeToRefs } from 'pinia'


const storeCounter = useCounterStore()
const storeName = useCounterStore() 
//  storeCounter.countries  = storeToRefs(useCounterStore)

// watch(storeCounter.countries, () => {
//   console.log('state countries changed', storeCounter.countries)
// })


  // const count = ref(0)

  // //method to increase count
  // const increaseCount = () => {
  //   // console.log('increased count')
  //   count.value++
  // }

  // const decreaseCount = () => {
  //   // console.log('increased count')
  //   count.value--
  // }

  // const oddOrEven = computed ( () => {
  //   if (count.value %2 === 0) return 'even'
  //   return 'odd'

  // })
</script>




<style scoped>
.count{
  font-size: 60px;
  margin: 20px;

}
.buttons button{
  font-size:40px ;
  margin: 10px;
}
</style>
