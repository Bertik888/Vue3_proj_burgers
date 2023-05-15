<template>
  <div 
    :class="{ 'active': isActive }" 
    @click="$emit('changeFilter', item)"
    class="filter-item">
    <img 
      :src="getImage(item.image)"
      :alt="item.name"
      class="filter-item__image"
    >
      {{ item.name }}
  </div>
</template>

<script>
  export default {
    name: 'FilterItem',

    props: {
      item: {
        type: Object
      },

      currentFilterId: {
        type: Number,
        default: null
      }
    },

    computed: {
      isActive () {
        return this.currentFilterId === this.item.id 
        // возврат true или false, если true, тогда присваивается класс active 
      }
    },

    methods: {
      getImage(img) {
        return require(`@/assets/images/icons/${img}`)
      }
    }

    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.filter-item {
  display: flex;
  align-items: center;   
  font-family: $font-family-nunito;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  padding: 8px 14px;
  height: 40px;
  // border: 1px solid #000;
  border-radius: 50px;
  background: $white;
}

.active {
  background: $yellow;

}

</style>