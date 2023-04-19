<template>
  <div class="container"> 
    <div class="row">

      <div class="col">
        <header-block />
      </div>

      <div class="col">
        <filter-block />
      </div>

      <div class="col">
        <basket />
      </div>

    </div>

  </div>

</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue'
import FilterBlock from '@/components/FilterBlock.vue'
import Basket from '@/components/Basket.vue'



export default {
  name: 'App',
  components: {
    HeaderBlock,
    FilterBlock,
    Basket,
  }
}
</script>

<style lang="scss">
@import '@/assets/css/variables.scss'; // почему через @, спросить еще раз

* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;  
}

body {
  font-family: 'Nunito', sans-serif;


  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}

.container {
  width: 100%;
  max-width: 1440px;

  padding-right: $gutter-x;
  padding-left: $gutter-x;  
  margin-right: auto;
  margin-left: auto;
}


.row {
  
  border: solid 2px #000;
  border-radius: 3px;
}

.col {
}
// уточнить по шрифтам?
@font-face {
  font-family: 'Nunito', sans-serif;
  src: url(@/assets/fonts/Nunito-VariableFont_wght.ttf) format('ttf');
  font-display: swap;
}


</style>