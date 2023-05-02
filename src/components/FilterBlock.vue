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
            id: 1,
            image: 'Бургеры.svg'
          },
          {
            name: 'Закуски',
            id: 2,
            image: 'Закуски.svg'
          },
          {
            name: 'Хот-доги',
            id: 3,
            image: 'Хот-доги.svg'
          },
          {
            name: 'Комбо',
            id: 4,
            image: 'Комбо.svg'
          },
          {
            name: 'Шаурма',
            id: 5,
            image: 'Шаурма.svg',
          },
          {
            name: 'Пицца',
            id: 6,
            image: 'Пицца.svg'
          },
          {
            name: 'Вок',
            id: 7,
            image: 'Вок.svg'
          },
          {
            name: 'Десерты',
            id: 8,
            image: 'Десерты.svg'
          },
          {
            name: 'Соусы',
            id: 9,
            image: 'Соусы.svg'
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