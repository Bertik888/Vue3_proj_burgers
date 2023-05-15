<template>
  <div class="delivery">
    <div class="row">

      <div class="col-6 delivery__img">        
        <img 
          src="@/assets/images/deliverydonat.svg" 
          alt="donat_img"
        >
      </div>      

      <div class="col-6">
        <div class="delivery__info">

          <h1 class="delivery__info_title">Доставка</h1>

          <div class="delivery__input_name">
            <ui-input 
              v-model="form.name"
              label="Ваше имя"
            /> 
          </div>

          <div class="delivery__input_phone">
            <ui-input 
              v-model="form.phone"
              label="Телефон"
            />
          </div>

          <div class="delivery__input_radio">
            <label>
              <input 
                v-model="form.radio"
                value="Самовывоз"
                type="radio"              
              >
              <span>Самовывоз</span>
            </label>

            <label>
              <input 
                v-model="form.radio"
                value="Доставка"
                type="radio"              
              >
              <span>Доставка</span> 
            </label>
            
          </div>  

          <template v-if="form.radio === 'Доставка'">
      
            <div class="delivery__input_adress">
              <ui-input 
                v-model="form.adress"
                label="Улица, дом, квартира"
              />
            </div>

            <div class="delivery__input_home">

              <div class="col-6">
                <div class="delivery__input_level">
                  <ui-input 
                    v-model="form.level"
                    label="Этаж"
                  />
                </div>
              </div>

              <div class="col-6">
                <div class="delivery__input_homephone">
                  <ui-input               
                    v-model="form.home"
                    label="Домофон"
                  />
                </div>
              </div>

            </div>  

          </template>

          <button 
            @click="addToOrder"
            class="btn delivery__button"
          >
            Оформить 
          </button> 
        </div>    
        
      </div>
    </div>

  </div>
</template>

<script>
import UiInput from './UiInput.vue';


  export default {
    name: 'DeliveryModal',

    components: {
      UiInput
    },

    data() {
      return {
        form: {
          name: '',

          phone: '',

          radio: 'Самовывоз',

          adress: '',

          level: '',

          home: ''
        }

      }
    },

    methods: {
      addToOrder() { 
        console.log('addToOrder', this.form)
      }
    }

  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.delivery {
  background: #F9F9F9;
  $font-family-nunito: 'Nunito', sans-serif;
  color: $black;

  width: 100%;
  min-height: 100%;
  
  & > .row {
    height: 100%;
  }

  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $yellow;
  }

  &__info {
   padding: 44px 24px 24px 0;

   display: flex;
   flex-direction: column;
   height: 100%;
   
   &_title {
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    margin-bottom: 16px;
   }
  }

  &__input {
    width: 100%;

    &_name {
      margin-bottom: 8px;
    }

    &_phone {
      margin-bottom: 16px;
    }

    &_radio {

      font-weight: 400;
      font-size: 12px;
      line-height: 16px;      

      label {
        margin-bottom: 8px;
        display: flex;
        align-items: center;

        & > span {
          margin-left: 8px; //  ли ?
        }
      }
      
    }

    &_adress {
      margin-bottom: 8px;
    }

    &_home {
      display: flex;
      width: 100%;
      margin-bottom: 32px;
    }

    &_level {
      margin-right: 4px; //  ли?
    }

    &_homephone {
      margin-left: 4px; //  ли?
    }

  }

  &__button {
    color: $white;
    background: $orange;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    margin-top: auto;
  }    
}

</style>