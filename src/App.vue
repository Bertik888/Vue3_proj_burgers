<template>
  <header-block />

  <div class="container"> 
    <div class="row">

      <div class="col-12">
        <filter-block 
          :currentFilterId="currentFilterId"
          @changeFilter="changeFilter"
          :filters="filters"
        />
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
          :products="filteredProducts"
          :filterTitle="filterTitle"
          @addToBasket="addToBasket"
        />
      </div>

    </div>  
  </div>

  <footer-block />

  <app-debug 
    :show="false"
  />

  <ui-loader 
    :isShow="isLoad"
  />

</template>

<script>
import { getProducts, getFilters } from '@/api/api'

import UiLoader from '@/components/UiLoader.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
import FilterBlock from '@/components/FilterBlock.vue'
import Basket from '@/components/Basket.vue'
import Products from '@/components/Products.vue'
import FooterBlock from '@/components/FooterBlock.vue'
import AppDebug from '@/components/AppDebug.vue'




export default {
  name: 'App',

  components: {
    UiLoader,
    HeaderBlock,
    FilterBlock,
    Basket,
    Products,
    FooterBlock,
    AppDebug
  },

  data() {
    return {
      currentFilter: undefined, 

      basketItems: [],

      products: [],

      filters: [],

      isLoad: false
    }
  },

  computed: {
    filterTitle() {
      return !this.currentFilter ? 'Весь ассортимент' : this.currentFilter.name
    },

    currentFilterId() {
      return !this.currentFilter ? null : this.currentFilter.id
    },

    filteredProducts () {
      if (this.currentFilterId) {
        return this.products.filter((item) => {
          return this.currentFilterId === item.cat_id
          // return this.products.filter((item) => this.currentFilterId === item.cat_id)  // сокращение кода выше
        })
      } else {
        return this.products
      }
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
    },

    changeFilter(item) {
      if  (this.currentFilter && item.id === this.currentFilter.id ) {
        this.currentFilter = undefined
      } else {
        this.currentFilter = item
      }
    },

    async getProducts() {
      return getProducts().then((result) => {
        this.products = result
      }) 
    },

    async getFilters() {
      return getFilters().then((result) => {
        this.filters = result
      }) 
    }
  },

  async mounted() {
    this.isLoad = true

    Promise.all([this.getProducts(), this.getFilters()])
      .finally(() => { 
        this.isLoad = false
      }) 
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
}


.row {
  display: flex;
  flex-wrap: wrap;

  margin-left: -15px;
  margin-right: -15px;

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

// col-12 = 12/12*100%=100%
// col-11 = 11/12*100%=91.6%
// col-10 = 10/12*100%=83.3% 
// col-9 = 9/12*100%=75%
// col-8 = 8/12*100%=66.6%
// col-7 = 7/12*100%=58.3%
// col-6 =  6/12*100%=50% 
// col-5 = 5/12*100%=41.6%
// col-4 = 4/12*100%=33.3% 
// col-3 = 3/12*100%=25%
// col-2 = 2/12*100%=16.6%
// col-1 = 1/12*100%=8.3%



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