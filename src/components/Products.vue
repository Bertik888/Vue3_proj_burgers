<template>
    <div class="row">

      <div class="col-12">
        <h3 class="products__title">{{ filterTitle }}</h3>
      </div>

      <div
        v-for="item in products"
        :key="item.id"
        class="col-4"
      >
        <products-item 
          :item="item" 
          @addToBasket="addToBasket"
          
        />
      </div>

    </div>
</template>

<script>
import ProductsItem from './ProductsItem.vue'

  export default {
    name: 'Products',
    components: {
      ProductsItem
    },

    props: {
      products: {
        type: Array,
        default: []
      },

      filterTitle: {
        type: String,
        default: ''
      }
    },

    methods: {
      addToBasket(data) {
        this.$emit('addToBasket', data)
        console.log(data)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.products {
  &__title {
    margin-top: 50px;
    margin-bottom: 24px;
    $font-family-nunito: 'Nunito', sans-serif;    
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    color: $black;
  }
}

</style>