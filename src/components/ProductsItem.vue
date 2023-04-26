<template>
  <div class="products-item">

    <div class="products-item__image">
      <img 
        src="@/assets/images/imagesProducts/meat.jpg" 
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