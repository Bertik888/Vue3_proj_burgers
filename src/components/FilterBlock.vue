<template>
  <div class="filter-block">

    <filter-item
      v-for="item in 7"
      :key="item"
      class="mr"
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
  align-items: center;
}

.mr {
  margin-right: 8px;
}

</style>