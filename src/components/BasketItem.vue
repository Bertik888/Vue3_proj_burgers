<template>
  <div class="basket-item">
    <div class="basket-item-block">

      <div class="basket-item-cart">
        <div class="basket-item-cart__title">
          Корзина
        </div>

        <div class="basket-item-cart__counter_basket">
          4
        </div>        
      </div>

      <div class="basket-item-cart__order">

        <div class="basket-item-cart__taste">
          <img 
            src="@/assets/images/imagesBasket/Сырный.svg"
            alt="Cырный"
            class="basket-item-cart__logo"
          >          
        </div>

        <div class="basket-item-cart__zakaz">
          <div class="basket-item-cart__name">
            Супер сырный
          </div>
          <div class="basket-item-cart__weight">
            512г
          </div>
          <div class="basket-item-cart__price">
            550 P
          </div>

        </div> 

        <div class="basket-item-cart__counter_zakaz">
          - 1 +          
        </div>

      </div>


      <div class="basket-item-cart__order">

        <div class="basket-item-cart__taste">
          <img 
            src="@/assets/images/imagesBasket/Фри.svg"
            alt="Фри"
            class="basket-item-cart__logo"
          >          
        </div>

        <div class="basket-item-cart__zakaz">
          <div class="basket-item-cart__name">
            Картофель фри
          </div>
          <div class="basket-item-cart__weight">
            180г
          </div>
          <div class="basket-item-cart__price">
            245 P
          </div>

        </div> 

        <div class="basket-item-cart__counter_zakaz">
          - 2 +          
        </div>

      </div>


      <div class="basket-item-cart__order">

        <div class="basket-item-cart__taste">
          <img 
            src="@/assets/images/imagesBasket/Хот-дог.svg"
            alt="Хот-дог"
            class="basket-item-cart__logo"
          >          
        </div>

        <div class="basket-item-cart__zakaz">
          <div class="basket-item-cart__name">
            Жгучий хот-дог
          </div>
          <div class="basket-item-cart__weight">
            245г
          </div>
          <div class="basket-item-cart__price">
            239 P
          </div>

        </div> 

        <div class="basket-item-cart__counter_zakaz">
          - 1 +          
        </div>

      </div>

      <div class="basket-item-cart__total">
        <div class="basket-item-cart__total_title">
          Итого
        </div>

        <div class="basket-item-cart__total_price">
          1279 P
        </div>
      </div>

      <div class="basket-item-cart__button">
        <button class="basket-item-cart__button_orange">
          Оформить заказ
        </button>
      </div>

      <div class="basket-item-cart__delivery">
        <img 
          src="@/assets/images/icons/Доставка.svg" 
          alt="Доставка"
          class="basket-item-cart__delivery_icon"
        >
        Бесплатная доставка
      </div>


    </div>



  </div>
</template>

<script>
  export default {
    name: 'BasketItem'
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.basket-item {
  // display: flex;
  // flex-direction: column;
  // border: solid 2px #000;
  // border-radius: 3px;
  margin-top: 122px;
  margin-left: $gutter-x;
  width: 30%;
}

.basket-item-block {
  border: 1px solid #F2F2F3;
}
.basket-item-cart {
  display: flex;
  border-bottom: 1px solid #F2F2F3;
  // gap: 145px;

  justify-content: space-between;
  padding: 15px;


  &__title {
    margin-right: 145px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    text-align: center;

    color: #000;
  }

  &__counter_basket {
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

  &__order {
    display: flex;
    border-bottom: 1px solid #F2F2F3;

    margin: 15px 10px;
    justify-content: space-between;

  }

  &__taste {
  }

  &__zakaz {
    flex-direction: column;
    // margin-left: 6px;
    // margin-right: 30px;
    margin-right: 138px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #000000;
  }
  
  &__weight {
    color: #B1B1B1;
  }

  &__counter_zakaz {
    display: flex;
    justify-content: center;

    width: 84px;
    height: 40px;

    background: #F2F2F3;
    border-radius: 12px;

    text-align: center;
    align-items: center;
    cursor: pointer;
  }

  &__total {
    display: flex;

    border-bottom: 1px solid #F2F2F3;

    padding: 15px 10px;
    justify-content: space-between;

  }
  
  &__total_title {

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    
    color: #000000;
  }

  &__button {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
  }

  &__button_orange {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 32px;
    gap: 10px;
    width: 268px;
    height: 40px;
    margin: 0 auto;

    color: #FFF;
    background: #FF7020;
    border-radius: 12px;
    cursor: pointer;
  }

  &__delivery_icon {
    margin-right: 8px;
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


  }
}

</style>