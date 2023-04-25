<template>

  <div class="basket-item">

    <img 
      src="@/assets/images/imagesBasket/Сырный.svg"
      alt="Cырный"
      class="basket-item__image"
    >     

    <div class="basket-item__zakaz">
      <div class="basket-item__name">
        Супер сырный
      </div>
      <div class="basket-item__weight">
        512г
      </div>
      <div class="basket-item__price">
        550 P
      </div>

    </div> 

    <div class="basket-item__counter">
      - 1 +          
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
  display: flex;
  border-bottom: 1px solid #F2F2F3;
  padding: 15px 0;
  justify-content: space-between;

  &__image {
    margin-right: 8px;
  }

  &__zakaz {
    flex-direction: column;
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

  &__counter {
    display: flex;
    justify-content: center;

    margin-left: 20px;


    width: 84px;
    height: 40px;

    background: #F2F2F3;
    border-radius: 12px;

    text-align: center;
    align-items: center;
    cursor: pointer;
  }
}

</style>