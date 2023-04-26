<template>
  <div class="ui-control-counter">
    <div class="basket-item__counter">
      - 1 +          
    </div>

  </div>
</template>

<script>
  export default {
    name: 'UiControlCounter'
    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.basket-item {

  &__counter {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    cursor: pointer;

    width: 84px;
    height: 40px;

    background: $light-grey;
    border-radius: 12px;
  }
}

</style>