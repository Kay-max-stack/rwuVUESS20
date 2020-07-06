<template>
  <div id="title">
    <h1>{{ msg }}</h1>
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

