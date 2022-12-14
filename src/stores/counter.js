import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',

  
  state: () => ({ //where we store reactive data properties just like in data in options api
   count: 2,
   name: 'eng',
   indicators: ['water', 'land', 'air'],
   sub_indicators: [],
   countries: ['select country'],
   selected_country: ''
  }),
  // watch(() => this.countries, (n) => console.log(n, " value changed"));
  
  
  actions: { //methods that allow access and modify data in state just like in methods options api
    increaseCount() { // in vuex, to call these methods, use dispatch ('increaseCount')
      this.count++
    },
    decreaseCount() {
      this.count--
    },

    handleCountries() {
 
      this.countries = ['Kenya', 'South Africa', 'Ethiopia', 'Rwanda']
      // console.log(this.countries, 'countries')
      // return this.countries

    },
    showSelectedIndicator($event){
      var selected_indicator = $event.target.value
      console.log(selected_indicator, 'selected indicator')
     
      return selected_indicator
      

    },

    showSelectedCountry($event){
      var selected_country = $event.target.value
      console.log(selected_country, 'selected country')
      // this.countries =  selected_country
      this.selected_country =  selected_country
      console.log(this.selected_country , 'changed selected country')
      return selected_country

      // if(selected_country === 'Kenya') return 'Kenya'
      // if(selected_country === 'South Africa') return 'South Africa'
      // if(selected_country === 'Ethiopia') return 'Ethiopia'
      // if(selected_country === 'Rwanda') return 'Rwanda'
   

    }
  },

  

  getters: { //grab sth from the state, modify it and return sth similar to computed
    oddOrEven: (state) => { //in vuex, storecounter.getters.oddOrEven   ///// in pinnia, storecounter.oddOrEven
      if (state.count %2 === 0) return 'even'
      return 'odd'

    },
    populateName : (state) => {
      if(state.name === 'eng') return 'Risper Dev'
    },

    
    handleCountriesChange: (state ) => {
      if(state.selected_country !== null) {
        state.selected_country = this.selected_country
      }
     
      
      
      
      // console.log(state.countries, 'countries updated')
      return  state.selected_country

    },

    handleIndicators: (state) => {
      console.log(state.indicators, 'state indicators')
      return state.indicators

    },
    handleSubIndicators: (state) => {
      if( state.indicators === 'water') {
        state.sub_indicators = ['water turbidity', 'water quality', 'NDWI']}
  
        if( state.indicators === 'land'){
        state.sub_indicators = ['soil moisture index', 'vegetation cover', 'soil erosivity']}
  
        if( state.indicators === 'air') {
        state.sub_indicators = ['NO2', 'air quality index', 'SO2']}
      

    }
  },
})
