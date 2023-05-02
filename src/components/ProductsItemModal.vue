<template>
  <div class="card">
    <div class="row">

      <div class="col-12">
        <div class="card__name">
          {{ item.name }}
        </div>
      </div>

      <div class="col-5">
        <div class="card__img">
          <img         
            src="@/assets/images/imagesProducts/meat.jpg"        
            alt="Мясная бомба"
          >  
        </div> 

        <!-- @addToBasket="" -->
        <button 
          
          class="btn card__button">
            Добавить
        </button>       
      </div>

      <div class="col-7">
        <div class="card__description">
          {{ item.description }}
        </div> 

        <div class="card__structure">

          <p class="card__structure_title">
            Состав:
          </p>            
          <ul 
            v-if="item.structure.length"
            class="card__structure_comp"
          >
            <li 
              v-for="(element, index) in item.structure"
              :key="index" 
            >
              {{ element }}                
            </li>
          </ul> 
        </div>

        <div class="card__calories">
          {{ item.weight }}г, ккал {{ item.calories }} 
        </div>
        <!-- Нужен ли тут див? div class="card__calories-->
        
        <div class="card__counter">
          <ui-control-counter
            v-model="counter"
          />  
          <div class="card__price">
            {{ item.price }}Р
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import UiControlCounter from '@/components/UiControlCounter.vue'

  export default {
    name: 'ProductItemModal',

    components: {
      UiControlCounter
    },

    data() {
      counter: 0
    },

    props: {
      item: {
        type: Object        
      }
    }
    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.card {
  background: #fff;
  width: 100%;
  min-height: 100%;
  padding: 24px 24px 38px 24px;

  $font-family-nunito: 'Nunito', sans-serif;
  color: #000;

  &__name {
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 24px;
  }

  &__img {
    margin-bottom: 40px;
    border-radius: 16px;
    overflow: hidden;
    img {      
      max-width: 100%;
    }
  }

  &__button {
    color: $white;
    background: $orange
  }

  &__description {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    margin-bottom: 10px;
  }

  &__structure {
    font-size: 12px;
    line-height: 130%; 


    &_title {
      font-weight: 600;     // уточнить по margin-bottom: 4px;

    }
    &_comp {
      font-weight: 400;     // уточнить по margin-bottom: 4px;
      list-style: none;
    }
  }

  &__calories {
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    color: #B1B1B1;
    margin-bottom: 40px;
  }

  &__counter {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__price {
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    color: #000;
    align-items: center;
  }
  
}

</style>


