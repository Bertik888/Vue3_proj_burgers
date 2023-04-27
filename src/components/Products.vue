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
        <products-item 
          :item="item" 
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

    data() {
      return {
        products: [
          {
            name: 'Мясная бомба',
            price: 689,
            weight: 520,
            id: 1,
            image: 'meat.jpg',
            cat_id: 1
          },
          {
            name: 'Супер сырный',
            price: 550,
            weight: 512,
            id: 2,
            image: 'cheez.jpg',
            cat_id: 1
          },
          {
            name: 'Сытный',
            price: 639,
            weight: 580,
            id: 3,
            image: 'sitnay.jpg',
            cat_id: 1

          },
          {
            name: 'Тяжелый удар',
            price: 480,
            weight: 470,
            id: 4,
            image: 'hard.jpg',
            cat_id: 1
          },
          {
            name: 'Вечная классика',
            price: 450,
            weight: 450,
            id: 5,
            image: 'classic.jpg',
            cat_id: 1
          },
          {
            name: 'Итальянский',
            price: 560,
            weight: 510,
            id: 6,
            image: 'italiano.jpg',
            cat_id: 1
          }
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