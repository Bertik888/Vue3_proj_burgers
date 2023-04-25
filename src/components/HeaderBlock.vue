<template>
  <div class="header-block">
    <div class="container">
      <div class="header-block__logo">
          <img 
            src="@/assets/images/YourMeal.svg" 
            alt="Логотип"
          >
          <img 
            src="@/assets/images/icon-kitchen.svg" 
            alt="Логотип"
          >
      </div>
      <div class="header-block__logo">
        <img 
          src="@/assets/images/burger.svg" 
          alt="Бургер"
          class="header-block__burger_img"
        >
        <div class="header-block__burger_title">
          <h1>Только самые</h1>
          <p>сочные бургеры!</p>
          <h2>Бесплатная доставка от 599Р</h2>
        </div>
      </div>


      

    </div>

  </div>
</template>

<script>
  export default {
    name: 'HeaderBlock'
  }
</script>

<style lang="scss" scoped>
.header-block {
  height: 466px;           // без него картинка становится полосой
  
  // background-size: contain;
  // background-size: cover;
  background-image: url(@/assets/images/elipse.svg);
  background-repeat: no-repeat;
  background-position: bottom center;

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }

  &__burger_img {
    margin-right: 64px;
  }

  &__burger_title {
    flex-direction: column;
    
    font-family: 'Nunito';
    font-style: normal;
  }

  &__burger_title h1 {
    font-weight: 800;
    font-size: 50px;
    line-height: 120%;

    color: #FFFFFF;
  }

  &__burger_title p {
    font-weight: 800;
    font-size: 50px;
    line-height: 120%;

    color: #FF5C00;
    padding-bottom: 26px;
  }

  &__burger_title h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    color: #FFFFFF;
    padding-top: 26px;   
  }

  

}

</style>