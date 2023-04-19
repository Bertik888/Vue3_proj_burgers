<template>
  <div class="filter-item">

    <div class="filter-item__food food-burgers">
      <img 
        src="@/assets/images/icons/Бургеры.svg"
        alt="Бургеры"
        class="filter-item__image"
      >
      Бургеры
    </div>

    <div class="filter-item__food">
      <img 
        src="@/assets/images/icons/Закуски.svg"
        alt="Закуски"
        class="filter-item__image"
      >
      Закуски
    </div>

    <div class="filter-item__food">
      <img 
        src="@/assets/images/icons/Хот-доги.svg"
        alt="Хот-доги"
        class="filter-item__image"
      >
      Хот-доги
    </div>

    <div class="filter-item__food">
      <img 
        src="@/assets/images/icons/Комбо.svg"
        alt="Комбо"
        class="filter-item__image"
      >
      Комбо
    </div>

    <div class="filter-item__food">
      <img 
        src="@/assets/images/icons/Шаурма.svg"
        alt="Шаурма"
        class="filter-item__image"
      >
      Шаурма
    </div>

    <div class="filter-item__food">
      <img 
        src="@/assets/images/icons/Пицца.svg"
        alt="Пицца"
        class="filter-item__image"
      >
      Пицца
    </div>

    <div class="filter-item__food">
      <img 
        src="@/assets/images/icons/Вок.svg"
        alt="Вок"
        class="filter-item__image"
      >
      Вок
    </div>

    <div class="filter-item__food">
      <img 
        src="@/assets/images/icons/Десерты.svg"
        alt="Десерт"
        class="filter-item__image"
      >
      Десерты
    </div>

    <div class="filter-item__food">
      <img 
        src="@/assets/images/icons/Соусы.svg"
        alt="Соус"
        class="filter-item__image"
      >
      Соусы
    </div>

  </div>

</template>

<script>
  export default {
    name: 'FilterItem'

    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.filter-item {
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  cursor: pointer;
  // align-items: center;
  // text-align: center;

  &__food {
    display: flex;
    flex-direction: row;


    align-items: center;
    text-align: center;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding: 8px 14px;
    gap: 8px;

    width: 134px;
    height: 40px;

    border: 1px solid #000;
    // background: #FFAB08;
    border-radius: 50px;
        
  }

  &__image {
    // margin-right: 8px;
  }
}

.food-burgers {
  background: #FFAB08;

}

</style>