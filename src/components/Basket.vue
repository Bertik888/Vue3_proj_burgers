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
      v-for="item in 3"
      :key="item"
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
    }
    
  }
</script>

<style lang="scss">


.basket {
  margin-top: 122px;
  display: flex;
  flex-direction: column;
  border: solid 2px #000;
  border-radius: 18px;
  padding: 16px;
  background: #fff;


  &__info {
    display: flex;
    border-bottom: 1px solid #F2F2F3;
    justify-content: space-between;
    padding: 15px 0;


    &_title {
      margin-right: 145px;

      font-family: 'Nunito';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 100%;
      text-align: center;

      color: #000;
    }

    &_counter {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;

      color: #000;
      
      width: 41px;
      height: 20px;

      background: #F2F2F3;
      border-radius: 6px;

      display: flex;
      justify-content: center;

      text-align: center;
      align-items: center;
    }
  }

  &__total {
    display: flex;
    border-bottom: 1px solid #F2F2F3;
    padding: 15px 10px;
    justify-content: space-between;

    &_title {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #000000;
    } 
  }

  &__button {
    color: #FFF;
    background: #FF7020;
  }

  

  &__delivery {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #000000;
    align-items: center;
    text-align: center;
    display: flex;
    cursor: pointer;

    &_icon {
     margin-right: 8px;
    }


  }

}

</style>