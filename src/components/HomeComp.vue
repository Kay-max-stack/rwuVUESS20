<template>
<div id="home">
    <p>{{ msg }}</p>
</div>
</template>


<script>
export default {
  name: 'HomeComp',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
#home {
  text-align: center;
}
button {
    padding-right: 100px;
    padding-left: 100px;
}
</style>
