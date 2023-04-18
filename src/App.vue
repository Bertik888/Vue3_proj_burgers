<template>
  <div class="container"> 
    1
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import '@/assets/css/variables.scss'; // почему через @, спросить еще раз

* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

.container {
  width: 100%;
  max-width: 1440px;

  margin-right: auto;
  margin-left: auto;
}

// уточнить по шрифтам?
@font-face {
  font-family: 'Nunito', sans-serif;
  src: url(@/assets/fonts/Nunito-VariableFont_wght.ttf) format('ttf');
  font-display: swap;
}


</style>