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
        <basket 
          @changeCounter="changeCounter"
          :basketItems="basketItems"
        />
      </div>

      <div class="col-9">
        <products 
          @addToBasket="addToBasket"
        />
      </div>

    </div>  
  </div>

  <footer-block />

  <app-debug 
    :show="false"
  />

</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue'
import FilterBlock from '@/components/FilterBlock.vue'
import Basket from '@/components/Basket.vue'
import Products from '@/components/Products.vue'
import FooterBlock from '@/components/FooterBlock.vue'
import AppDebug from '@/components/AppDebug.vue'



export default {
  name: 'App',

  components: {
    HeaderBlock,
    FilterBlock,
    Basket,
    Products,
    FooterBlock,
    AppDebug
  },

  data() {
    return {
      basketItems: []
    }
  },

  methods: {
    addToBasket(data) {
      const existItems = this.basketItems.find((item) => {
        return item.id === data.id
      })

      if (existItems) {
        console.log(existItems.counter, data.counter)
        
        existItems.counter = existItems.counter + data.counter
      } else {
        this.basketItems.push(data)
      }
    },

    changeCounter(item) {
      if (item.counter === 0) {
        this.removeItem(item.id)
      } else {
        const existItem = this.basketItems.find((el) => {
          return el.id === item.id
        })
        existItem.counter = item.counter
      }
    },
    
    removeItem(id) {
      const index = this.basketItems.findIndex((item) => {
        return item.id === id
      })
        this.basketItems.splice(index, 1)
    }
  },
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

/* .col-1 {
  flex: 0 0 auto;
  width: calc(100% / 12);
}

.col-2 {
  flex: 0 0 auto;
  width: calc(100% / 6);
}

.col-3 {
  flex: 0 0 auto;
  width: calc(100% / 4);
}

.col-4 {
  flex: 0 0 auto;
  width: calc(100% / 3);
}

.col-5 {
  flex: 0 0 auto;
  width: calc(100% / (12/5));
}

.col-6 {
  flex: 0 0 auto;
  width: calc(100% / (12/6));
}

.col-7 {
  flex: 0 0 auto;
  width: calc(100% / (12/7));
}

.col-8 {
  flex: 0 0 auto;
  width: calc(100% / (12/8));
}

.col-9 {
  flex: 0 0 auto;
  width: calc(100% / (12/9));
}

.col-10 {
  flex: 0 0 auto;
  width: calc(100% / (12/10));
}

.col-11 {
  flex: 0 0 auto;
  width: calc(100% / (12/11));
}

.col-12 {
  flex: 0 0 auto;
  width: calc(100% / (12/12));
} */


.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  width: calc(100% / 3);
  flex: 0 0 auto;
}

.col-5 {
  width: 41.6%;
  flex: 0 0 auto; 
}

.col-6 {
  width: 50%;
  flex: 0 0 auto; 
}

.col-7 {
  width: 58.3%;
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

// col-12 = 12/1 = 12      100%                 col-12 = 12/12*100%=100%
// col-6 = 12/2 = 6        100% / 2 = 50%       col-6 =  6/12*100%=50% 
// col-4 = 12/3 = 4        100% / 3 = 33.3%     col-4 = 4/12*100%=33.3% 
// col-3 = 12/4 = 3        100% / 4 = 25%       col-3 = 3/12*100%=25%
// col-2.4 = 12/5 = 2.4    100% / 5 = 20%       col-5 = 5/12*100%=41.6%

// col-2 = 12/6 = 2        100% / 6 = 16.6%     col-2 = 2/12*100%=16.6%

// col-1.7 = 12/7 = 1.7    100% / 7 = 14.3%     col-7 = 7/12*100%=58.3%
// col-1.5 = 12/8 = 1.5    100% / 8 = 12.5%     col-8 = 8/12*100%=66.6%
// col-1.3 = 12/9 = 1.3    100% / 9 = 11.1%     col-9 = 9/12*100%=75%
// col-1.2 = 12/10 = 1.2   100% / 10 = 10%      col-10 = 10/12*100%=83.3% 
// col-1.1 = 12/11 = 1.1   100% / 11 = 9.1%     col-11 = 11/12*100%=91.6%
// col-1 = 12/12 = 1       100% / 12 = 8.3%     col-1 = 1/12*100%=8.3%



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