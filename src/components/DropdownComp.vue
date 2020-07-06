<template>
  <b-dropdown-item>{{beerText}}</b-dropdown-item> 
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    beerText: String
  }
}
</script>