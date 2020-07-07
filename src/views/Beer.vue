<template>
  <b-container>
    <div id="heading">
      <TitleComp :msg="beerTitle" />
    </div>
    <b-row>
      <div>
        <b-dropdown text="Menu" dropright>
          <DropdownComp @click.native="clickMenu"  v-for="(beer, k) in beers" :key="k" :beerText="beer.name"></DropdownComp>
        </b-dropdown>
      </div>
      <BeerCardComp id="beerCard" v-for="(searched, g) in searchedBeer" :key="g" :title="searched.name" :bodMessage="searched.brewers_tips" :footerMessage="searched.description"></BeerCardComp>
   </b-row>
   </b-container>
</template>

<script>
import Axios from 'axios';
/**b-dropdowm sowie b-row und b-container aus Bootstrap */
export default {
  name: 'Beer',
  data: function() {
    return {
      beerTitle: 'Beer',
      beers: [],
      searchedBeer: [],
      clickedString: ''
    }},
    mounted () {
      Axios
        .get('https://api.punkapi.com/v2/beers')
        .then(response => {this.beers  = response.data})
        .catch(e => console.log(e))
     },
     methods: {
      clickMenu: function(event){
        let clickedName = event.target.innerHTML
        Axios
        .get('https://api.punkapi.com/v2/beers?beer_name=' + clickedName)
        .then(response => {this.searchedBeer = response.data})
        .catch(e => {console.log(e)})
      } 
     }
}
</script>

<style scoped>
#heading {
  margin-bottom: 40px;
}
#beerCard {
  margin-left: 300px;
}
</style>