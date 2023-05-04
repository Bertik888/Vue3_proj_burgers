<template>
  <div class="ui-control">
    <div class="ui-control__counter">
      <button
        @click="$emit('update:modelValue', modelValue > minValue ? modelValue - 1 : minValue)"
        class="btn ui-control__btn"
      >
       -
      </button>         

      {{ modelValue }}

      <button
        @click="$emit('update:modelValue', modelValue + 1)"
        class="btn ui-control__btn"
      >
       +
      </button> 
    </div>

  </div>
</template>

<script>
  export default {
    name: 'UiControlCounter',
    
    props: {
      modelValue: {
        type: Number,
        default: 0
      },

      minValue: {
        type: Number,
        default: 0
      }
    }
    
  }
</script>

<style lang="scss" >
@import '@/assets/css/variables.scss';

.ui-control { 
  $font-family-nunito: 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: $black;

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