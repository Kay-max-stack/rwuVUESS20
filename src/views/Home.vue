<template>
  <div>
    <TitleComp :msg="homeTitle"/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return{
      homeTitle: 'Hallo zu unserer VueJS Aufgabe'
    }
  }
}
</script>

