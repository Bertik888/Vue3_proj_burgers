<template>
  <div class="basket">
    
    <basket-item />

  </div>
</template>

<script>
import BasketItem from './BasketItem.vue'
  export default {
    name: 'Basket',

    components: {
      BasketItem
    }
    
  }
</script>

<style lang="scss" scoped>

</style>