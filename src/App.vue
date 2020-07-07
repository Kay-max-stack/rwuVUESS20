<template>
<div>
    <div id="app">
      <div id="nav">
        <b-row id="container">
         <b-col> 
            <img id="picRWU" alt="Vue logo" src="./assets/rwu.png">
            <img id="pic" alt="Vue logo" src="./assets/logo.png">
          </b-col>
          <b-col class="align-self-sm-end">
            <router-link to="/">Home</router-link> |
            <router-link to="/jokes">Jokes</router-link> |
            <router-link to="/beer">Beer</router-link> |
            <router-link to="/about">About</router-link>
          </b-col>
        </b-row>
         <hr>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
/*
  #app sowie #nav wurden beim genrerien der app durch vue create XX  erzeugt

  Anstelle der <router-view/> werden die im index.js importierten Components gerendert
  b-row sowie b-col wurden aus Bootstrap verwendet
  Router Links wurden beim erzeugen des Vue Routers erzeugt
*/
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  color: #2c3e50;
}
#container {
  padding-left: 50px;
}
#pic {
  margin-right: 50px;
  width: 100px;
}
#picRWU {
  margin-right: 50px;
  width: 300px;
}

</style>
