<template>
  <div class="filter-block">

    <filter-item
      :currentFilterId="currentFilterId"
      @changeFilter="$emit('changeFilter', $event)"
      v-for="item in filters"
      :key="item.id"
      class="mr mb"
      :item="item"
    />

  </div>
</template>

<script>
import FilterItem from './FilterItem.vue';

  export default {
    name: 'FilterBlock',

    components: {
      FilterItem
    },

    props: {
      filters: {
        type: Array,
        default: []
      },

      currentFilterId: {
        type: Number,
        default: null
      }
    }
    
    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.filter-block {
  display: flex;  
  flex-wrap: wrap;
  align-items: center;
  margin-top: 40px;
  cursor: pointer;
}

.mr {
  margin-right: 24px;
}

.mb {
  margin-bottom: 8px;
}

</style>