<template>
  <div class="filter-block">

    <filter-item />

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
  // border: solid 2px #000;
  // border-radius: 3px;

}

</style>