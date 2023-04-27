<template>
  <div class="basket">
    <div class="basket__info">
      <div class="basket__info_title">
        Корзина
      </div>

      <div class="basket__info_counter">
        4
      </div>        
    </div>


    <basket-item 
      v-for="item in products"
      :key="item.id"
      :item="item"
    />

    <div class="basket__total">
      <div class="basket__total_title">
        Итого
      </div>

      <div class="basket__total_price">
        1279 P
      </div>
    </div>

    <button class="btn basket__button">
      Оформить заказ
    </button>

      <div class="basket__delivery">
        <img 
          src="@/assets/images/icons/Доставка.svg" 
          alt="Доставка"
          class="basket__delivery_icon"
        >
          Бесплатная доставка
      </div>

  </div>
</template>

<script>
import BasketItem from './BasketItem.vue'
  export default {
    name: 'Basket',

    components: {
      BasketItem
    },

    props: {
      products: {
        type: Object
      },
      item: {
        type: Object
      }
    }

    
    
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';


.basket {
  margin-top: 122px;
  display: flex;
  flex-direction: column;
  // border: solid 1px $black;
  border-radius: 18px;
  padding: 16px;
  background: $white;
  font-family: $font-family-nunito;
  color: $black;

  &__info {
    display: flex;
    border-bottom: 1px solid $light-grey;
    justify-content: space-between;
    padding: 15px 0;


    &_title {      
      font-weight: 600;
      font-size: 24px;
      line-height: 100%;
      text-align: center;
    }

    &_counter {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      
      width: 41px;
      height: 20px;

      background: $light-grey;
      border-radius: 6px;

      display: flex;
      justify-content: center;

      text-align: center;
      align-items: center;
    }
  }

  &__total {
    display: flex;
    padding: 15px 10px;
    justify-content: space-between;

    &_title {
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    } 
  }

  &__button {
    color: $white;
    background: $orange;
  }  

  &__delivery {    
    display: flex;
    align-items: center;
    text-align: center;

    margin-top: 12px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;    
    cursor: pointer;

    &_icon {
     margin-right: 8px;
    }


  }

}

</style>