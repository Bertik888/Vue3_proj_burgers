<template>
  <div class="basket">
    <div class="basket__info">
      <div class="basket__info_title">
        Корзина
      </div>

      <div class="basket__info_counter">
        {{ counter }}
      </div>        
    </div>

    <template v-if="basketItems.length">
    
      <basket-item 
        @changeCounter="$emit('changeCounter', $event)"
        v-for="item in basketItems"
        :key="item.id"
        :item="item"
      />

      <div class="basket__total">
        <div class="basket__total_title">
          Итого:
        </div>

        <div class="basket__total_price">
          {{ price }} P
        </div>
      </div>

      <button 
        @click="isOpenDelivery = true"
        class="btn basket__button"
      >
        Оформить заказ
      </button>

      <dialog-modal
        :isOpen="isOpenDelivery"
        @hide="isOpenDelivery = false"
      >
      
        <delivery-modal

        />
      </dialog-modal>

      <!-- <products-item-modal />  -->
      <!-- is show true  -->
      <!-- внутрь модалки прокинуть компонент с доставкой, сверстать -->

      <div
        v-if="priceProducts >= 1000" 
        class="basket__delivery">
        <img 
          src="@/assets/images/icons/Доставка.svg" 
          alt="Доставка"
          class="basket__delivery_icon"
        >
          Бесплатная доставка
      </div>
    </template>

    <template v-else>
      Тут пока пусто :(
    </template>

  </div>
</template>

<script>
import DeliveryModal from './DeliveryModal.vue'
import DialogModal from './DialogModal'
import BasketItem from './BasketItem.vue'

  export default {
    name: 'Basket',

    components: {
      BasketItem,
      DialogModal,
      DeliveryModal
    },

    data() {
      return {
        products: [],
        isOpenDelivery: false
      }
    },
    
    props: {
      basketItems: {
        type: Array,
        default: []
      }
    },

    computed: {
      priceProducts() {
        // let acc = 0
        // this.basketItems.forEach((item) => {     //МЕТОД forEach
        //   acc += item.price * item.counter
        // })
        // return acc
        
        return this.basketItems.reduce((acc, item) => {
          return acc += item.price * item.counter
        }, 0)
      },

      price() {
        return this.priceProducts >= 1000 ? this.priceProducts : this.priceProducts + 300
      },

      counter() {
        return this.basketItems.reduce((acc, item) => {
          return acc += item.counter
        }, 0)
      }
    }

    // Ниже метод равносилен $emit, $event
    // methods: {
    //   changeCounter(data) {
    //     this.$emit('changeCounter', data)
    //   }
    // }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';


.basket {
  margin-top: 122px;
  display: flex;
  flex-direction: column;
  // border: solid 1px $black;
  border-radius: 18px;
  padding: 16px;
  background: $white;
  font-family: $font-family-nunito;
  color: $black;

  &__info {
    display: flex;
    border-bottom: 1px solid $light-grey;
    justify-content: space-between;
    padding: 15px 0;
    align-items: center;

    &_title {      
      font-weight: 600;
      font-size: 24px;
      line-height: 100%;
      text-align: center;
    }

    &_counter {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      
      width: 41px;
      height: 20px;

      background: $light-grey;
      border-radius: 6px;

      display: flex;
      justify-content: center;

      text-align: center;
      align-items: center;
    }
  }

  &__total {
    display: flex;
    padding: 15px 10px;
    justify-content: space-between;

    &_title {
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    } 
  }

  &__button {
    color: $white;
    background: $orange;
  }  

  &__delivery {    
    display: flex;
    align-items: center;
    text-align: center;

    margin-top: 12px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;   

    &_icon {
     margin-right: 8px;
    }


  }

}

</style>