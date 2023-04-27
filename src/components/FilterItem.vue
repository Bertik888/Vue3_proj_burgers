<template>
  <div class="filter-item food-burgers">
    <img 
      src="@/assets/images/icons/Бургеры.svg"
      alt="Бургеры"
      class="filter-item__image"
    >
      {{ filterProduct.name }}
  </div>
</template>

<script>
  export default {
    name: 'FilterItem',

    props: {
      filterProduct: {
        type: Object
      }
    }

    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.filter-item {
  display: flex;
  align-items: center;   
  font-family: $font-family-nunito;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  padding: 8px 14px;
  height: 40px;
  // border: 1px solid #000;
  border-radius: 50px;
  background: $white;
}

.food-burgers {
  // background: $yellow;

}

</style>