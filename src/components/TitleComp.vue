<template>
  <div id="title">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'TitleComp',
  props: {
    msg: String
  }
}
</script>

<style scoped>
#title {
  text-align: center;
}
</style>

