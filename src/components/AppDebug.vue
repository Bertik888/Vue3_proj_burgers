<template>
  <div
    v-if="show" 
    class="debug"
  >
    <div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppDebug',

  props: {
    show: {    
      type: Boolean,
      default: false  
    }
  }
})
</script>

<style lang="scss" scoped>
$max-width-container: 1440px;   //изменить
$offset-container: 75px;        //изменить gutter-x padding container
$offset: 15px;                  //изменить padding row (margin) & col (padding) margin=padding

.debug {
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  > div {
    height: inherit;
    max-width: $max-width-container;
    padding-left: $offset-container;
    padding-right: $offset-container;
    margin: 0 auto;

    > div {
      height: inherit;
      display: flex;
      flex-wrap: wrap;
      margin-left: $offset * -1;
      margin-right: $offset * -1;

      > div {
        box-sizing: border-box;
        padding-left: $offset;
        padding-right: $offset;
        word-wrap: break-word;
        width: calc(100% / 12);
        height: inherit;
        outline: dashed 1px #ff98005e;

        &:before{
          content: '';
          display: block;
          height: 100%;
          background: #a1030345;
        }
      }
    }
  }
}
</style>
