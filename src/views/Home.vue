<template>
  <div>
    <!--p>This jumbotron template is borrowed from https://getbootstrap.com/docs/4.0/components/jumbotron/ and edited by ourselves to fit the needs</p--> 
    <section id="overview">
    <div class="jumbotron w-50 p-3 align-middle" style="background-color: white;" >
      <h1 @click="showJoke()" class="display-4">Jokes</h1>
        <HomeComp v-if="show1" class="lead" :msg="jokeDescription"> </HomeComp>
      <hr class="my-4">
      <h1 @click="showBeer()"  class="display-4">Beers</h1>
        <HomeComp v-if="show2" class="lead" :msg="beerDescription"> </HomeComp>
      <hr class="my-4">
      <h1 @click="showAbout()"  class="display-4">About</h1>
        <HomeComp v-if="show3" class="lead" :msg="aboutDescription"> </HomeComp>
      <hr class="my-4">
    </div>
    </section>
    <TitleComp :msg="homeTitle"/>
</div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return{
      homeTitle: 'Erstellt von Kay Tobias Konrad & Sebastian Jäger',
      jokeDescription: 'Hier kann man mehr oder minder lustige Witze lesen und sich per Klick auf den Button neue Witze ausgeben lassen! Einer flacher als der andere!',
      beerDescription: 'Hier kann man aus einer Liste aus Bieren wählen und sich für jedes einzelne Bier einige Zusatzinfos anschauen! Die Zusatzinfos sind der Biername, Tips vom Braumeister und eine Geschmacksbeschreibung des Bieres',
      aboutDescription: 'In der About Seite findet man weiterführende Links über die Frameworks die Hochschule und wer die Entwickler dieser Seite sind!',
      show1: false,
      show2: false,
      show3: false,
    };
  },
  methods: {
    showJoke() {
      if(this.show1 === false) {
        this.show1 = true;
      }else {
        this.show1 = false;
      }
    },
    showBeer() {
      if(this.show2 === false) {
        this.show2 = true;
      }else {
        this.show2 = false;
      }
    },
    showAbout() {
      if(this.show3 === false) {
        this.show3 = true;
      }else {
        this.show3 = false;
      }
    },
  },
};
</script>

<style>
  #overview {
    text-align: center;
    padding-left: 33.3%;
}
</style>
