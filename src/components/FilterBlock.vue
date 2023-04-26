<template>
  <div class="filter-block">

    <filter-item
      v-for="item in 9"
      :key="item"
      class="mr mb"
    />

  </div>
</template>

<script>
import FilterItem from './FilterItem.vue';

  export default {
    name: 'FilterBlock',

    components: {
      FilterItem
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
}

.mr {
  margin-right: 8px;
}

.mb {
  margin-bottom: 8px;
}

</style>