<template>
    <div class="row">
      <div class="col-12">
        <h3 class="products__title">Бургеры</h3>
      </div>
      <div
        v-for="item in products"
        :key="item.id"
        class="col-4"
      >
        <products-item :item="item" />
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
    data() {
      return {
        products: [
          {
            name: 'test 1',
            price: 700,
            weight: 520,
            id: 1,
            image: 'image.jpg'
          },
          {
            name: 'test 2',
            price: 700,
            weight: 520,
            id: 2,
            image: 'image.jpg'
          },
          {
            name: 'test 3',
            price: 700,
            weight: 520,
            id: 3,
            image: 'image.jpg'
          },
          {
            name: 'test 4',
            price: 700,
            weight: 520,
            id: 4,
            image: 'image.jpg'
          },
        ]
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