<template>
  <div class="filter-item food-burgers">
    <img 
      src="@/assets/images/icons/Бургеры.svg"
      alt="Бургеры"
      class="filter-item__image"
    >
    Бургеры
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
    align-items: center;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding: 8px 14px;
    height: 40px;
    border: 1px solid #000;
    border-radius: 50px;
}

.food-burgers {
  background: #FFAB08;

}

</style>