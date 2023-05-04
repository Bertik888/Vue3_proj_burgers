<template>

  <div class="basket-item">

    <img 
      src="@/assets/images/imagesBasket/supercheez-basket.jpg"
      alt="Cырный"
      class="basket-item__image"
    >     

    <div class="basket-item__zakaz">
      
      <div class="basket-item__name">
         {{ item.name }}
      </div>
      <div class="basket-item__weight">
         {{ item.weight }} г
      </div>
      <div class="basket-item__price">
         {{ item.price }} P
      </div>

    </div> 

    <ui-control-counter 
      :model-value="item.counter"
      @update:modelValue="changeCounter"
    />

  </div>
</template>

<script>
import UiControlCounter from '@/components/UiControlCounter.vue'

  export default {
    name: 'BasketItem',

    components: {
      UiControlCounter
    }, 

    props: {
      item: {
        type: Object
      }
    },

    methods: {
      changeCounter(value) {
        this.$emit('changeCounter', { counter: value, id: this.item.id })
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.basket-item {
  display: flex;
  border-bottom: 1px solid $light-grey;
  padding: 15px 0;
  justify-content: space-between;
  font-family: $font-family-nunito;

  &__image {
    margin-right: 6px;
  }

  &__zakaz {
    flex-direction: column;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: $black;
    margin-right: 30px;
  }
  
  &__weight {
    color: #B1B1B1;
  }
}

</style>