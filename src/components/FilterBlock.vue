<template>
  <div class="filter-block">

    <filter-item
      v-for="filterProduct in filterProducts"
      :key="filterProduct.id"
      class="mr mb"
      :filterProduct="filterProduct"
    />

  </div>
</template>

<script>
import FilterItem from './FilterItem.vue';

  export default {
    name: 'FilterBlock',

    components: {
      FilterItem
    },

    data() {
      return {
        filterProducts: [
          {
            name: 'Бургеры',
            id: 7,
            image: 'Бургеры.svg',
            cat_id: 1
          },
          {
            name: 'Закуски',
            id: 8,
            image: 'Закуски.svg',
            cat_id: 2
          },
          {
            name: 'Хот-доги',
            id: 9,
            image: 'Хот-доги.svg',
            cat_id: 3
          },
          {
            name: 'Комбо',
            id: 10,
            image: 'Комбо.svg',
            cat_id: 4
          },
          {
            name: 'Шаурма',
            id: 11,
            image: 'Шаурма.svg',
            cat_id: 5
          },
          {
            name: 'Пицца',
            id: 12,
            image: 'Пицца.svg',
            cat_id: 6
          },
          {
            name: 'Вок',
            id: 13,
            image: 'Вок.svg',
            cat_id: 7
          },
          {
            name: 'Десерты',
            id: 14,
            image: 'Десерты.svg',
            cat_id: 8
          },
          {
            name: 'Соусы',
            id: 15,
            image: 'Соусы.svg',
            cat_id: 9
          }
        ]
      }
    }
    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.filter-block {
  display: flex;  
  flex-wrap: wrap;
  align-items: center;
  margin-top: 40px;
  cursor: pointer;
}

.mr {
  margin-right: 24px;
}

.mb {
  margin-bottom: 8px;
}

</style>