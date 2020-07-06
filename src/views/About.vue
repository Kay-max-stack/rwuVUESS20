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
  </div>
</template>

<script>
export default {
  name: 'About',
  data: function() {
    return {
      myText: 'Das ist die About Page',
      myText2: 'Test',
      aboutTitle: 'About'
    }
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
</style>