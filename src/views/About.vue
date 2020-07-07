<template>
<div>
  <TitleComp id="title" :msg="aboutTitle"></TitleComp>
  <b-row class="justify-content-around">
    <a href="https://www.rwu.de/">
    <img id="picRWU" alt="Vue logo" src="../assets/rwu.png">
    </a>
    <a href="https://vuejs.org/">
    <img id="pic" alt="Vue logo" src="../assets/logo.png">
     </a>
     <a href="https://getbootstrap.com/">
     <img id="pic" alt="Vue logo" src="../assets/bootstrap.png">
     </a>
  </b-row>
  <div id="aboutDevs">
  <!--a> using popovers from bootstrap 4 as explained on https://getbootstrap.com/docs/4.0/components/popovers/</a--> 
    <v-tooltip bottom>
    <img class="rounded-circle" slot="activator" id="devImg" src="../assets/Sebastian.jpg" data-toggle="popover" title="Sebastian Jäger">
    <span>Sebastian</span>
    </v-tooltip>
    <img class="rounded-circle" id="devImg" src="../assets/Sebastian.jpg" data-toggle="popover" title="Kay Tobias Konrad">

</div>
  </div>  
  
</template>

<script>

export default {
  name: 'About',
  data: function() {
    return {
      aboutTitle: 'About',
      name: 'Sebastian Jaeger', 
      MatrikelNr: '30164',
    };
    
  },
}
</script>

<style scoped>
#title {
  margin-bottom: 40px;
}
#picRWU {
  width: 350px;
}
#pic {
  width: 200px;
}
#aboutDevs {
  text-align: center;
}
#devImg {
  margin-top: 7%;
  width: 10%;
}
</style>