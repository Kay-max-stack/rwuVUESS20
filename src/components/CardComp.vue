<template>
  <div>
    <b-card id="card">
      <b-card-text id="cardTitle"> {{title}} </b-card-text>
      <hr>
      <b-card-text> {{bodMessage}} </b-card-text>
      <hr>
      <b-card-text> {{footerMessage}} </b-card-text>
    </b-card>
  </div>
</template>

<script>
/**b-card Elemente aus Bootstrap */
  export default {
    name: 'CardComp',
    props: {
      title: String,
      bodMessage: String,
      footerMessage: String
    }
  }
</script>

<style scoped>
#card {
  width: 300px;
  height: 200px;
  font-size: large;
}
#cardTitle {
  font-weight: bold;
}
</style>