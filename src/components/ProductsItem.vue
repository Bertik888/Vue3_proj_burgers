<template>
  <div class="products-item">

    <div class="products-item__image">
      <img         
        :src="require(`@/assets/images/imagesProducts/${item.image}`)"        
        :alt="item.name">
    </div>

    <div class="products-item__price">
      {{ item.price }} Р
    </div>
    <div class="products-item__name">
      {{ item.name }}
    </div>
    <div class="products-item__weight">
      {{ item.weight }} г
    </div>

    <button 
      @click="isOpenCard = true"
      class="btn products-item__btn">
        Добавить
    </button>

    <dialog-modal
      :isOpen="isOpenCard"
      @hide="isOpenCard = false"
    >
      <products-item-modal 
        :item="item"
        @addToBasket="addToBasket"
      />
    </dialog-modal>


  </div> 

  

</template>

<script>
import DialogModal from './DialogModal'
import ProductsItemModal from './ProductsItemModal'



  export default {
    name: 'ProductsItem',

    components: {
      DialogModal,
      ProductsItemModal
    },

    data() {
      return { 
        isOpenCard: false
      }
    },

    props: {
      item: {
        type: Object        
      }
    },

    methods: {
      addToBasket(data) {
        this.$emit('addToBasket', data)
        console.log(data)

        this.isOpenCard = false
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.products-item {
  margin-bottom: 30px;
  $font-family-nunito: 'Nunito', sans-serif;
  color: $black;
  background: $white;
  border: 1px solid $light-grey;
  border-radius: 18px;
  padding: 12px;

  &__image {
    margin-bottom: 16px;
  }

  &__price {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
  }

  &__name {
    margin-bottom: 29px;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  &__weight { 
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;
    color: #B1B1B1;   
  }

  &__btn {
    background: $light-grey;
  }
}

</style>