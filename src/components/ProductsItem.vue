<template>
  <div class="products-item">

    <div class="products-item__image">
      <img 
        src="@/assets/images/imagesProducts/Мясная.svg" 
        alt="Мясная бомба">
    </div>


    <div class="products-item__price">
      689 P
    </div>
    <div class="products-item__name">
      Мясная бомба
    </div>
    <div class="products-item__weight">
      520г
    </div>

    <button class="btn products-item__btn">
      Добавить
    </button>

  </div> 

  

</template>

<script>
  export default {
    name: 'ProductsItem'
  }
</script>

<style lang="scss" scoped>

.products-item {
  margin-bottom: 12px;
  
  font-family: 'Nunito';
  font-style: normal;
  color: #000;

  border: 1px solid #F2F2F3;
  // background: #FFF;
  border-radius: 18px;
  background: #fff;
  padding: 12px;

  &__image {
    margin-bottom: 8px;
  }

  &__price {
    margin-top: 8px;
    margin-bottom: 4px;


    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
  }

  &__name {
    margin-top: 4px;

    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  &__weight {
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;
    margin-top: 30px;

    color: #B1B1B1;    
  }

  &__btn {
    margin-top: 8px;
    color: #000;
    background: #F2F2F3;
  }

}

</style>