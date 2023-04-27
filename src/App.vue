<template>
  <header-block />

  <div class="container"> 
    <div class="row">

      <div class="col-12">
        <filter-block />
      </div>

    </div>
      
    <div class="row">

      <div class="col-3">
        <basket />
      </div>

      <div class="col-9">
        <products />
      </div>

    </div>  
  </div>

  <footer-block />

</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue'
import FilterBlock from '@/components/FilterBlock.vue'
import Basket from '@/components/Basket.vue'
import Products from '@/components/Products.vue'
import FooterBlock from '@/components/FooterBlock.vue'





export default {
  name: 'App',
  components: {
    HeaderBlock,
    FilterBlock,
    Basket,
    Products,
    FooterBlock
  }
}
</script>

<style lang="scss">
@import '@/assets/css/variables.scss'; // @import через @, т.к css

* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;  
}

body {
  font-family: $font-family-nunito;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f5f5f5;
}

.btn {
  border: none;
  outline: none;
  box-shadow: none;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  border-radius: 12px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px;
  cursor: pointer;
}

.container {
  width: 100%;
  max-width: 1440px;

  padding-right: $gutter-x;
  padding-left: $gutter-x;  
  margin-right: auto;
  margin-left: auto;

  // border: solid 1px #000;
  // border-radius: 3px;
}


.row {
  display: flex;
  flex-wrap: wrap;

  margin-left: -15px;
  margin-right: -15px;
  // border: solid 1px #000;
  // border-radius: 3px;

  & > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  width: calc(100% / 3);
  flex: 0 0 auto;
}

.col-6 {
  width: 50%;
  flex: 0 0 auto; 
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

// уточнить по шрифтам?
@font-face {
  font-family: 'Nunito', sans-serif;
  src: url(@/assets/fonts/Nunito-Regular.ttf) format('ttf');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Nunito', sans-serif;
  src: url(@/assets/fonts/Nunito-SemiBold.ttf) format('ttf');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Nunito', sans-serif;
  src: url(@/assets/fonts/Nunito-ExtraBold.ttf) format('ttf');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}


</style>