<template>
  <div class="ui-input-block">

    <input
      :type="type"
      :placeholder="`${label}`"

      :value="modelValue"        
      @input="onInput"

      class="ui-input-block__input"  
    >

  </div>
</template>

<script>
  export default {
    name: 'UiInput',

    props: {

      modelValue: {
        type: [String, Number],
        default: ''
      },

      type: {
        type: String,
        default: 'text'
      },

      label: {
        type: String,
        default: ''
      }
    },

    methods: {
      onInput(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.ui-input-block {

  &__input {
    display: flex;
    align-items: center;

    $font-family-nunito: 'Nunito', sans-serif;
    color: $black;     // вопрос по label, как стилизовать отдельно ?
    // color: #B1B1B1;
    line-height: 130%;
    font-size: 12px;
    background: $white;

    border: none;
    outline: none;
    box-shadow: none;
    width: 100%;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 12px;
    height: 40px;

  }
}

</style>