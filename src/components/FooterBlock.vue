<template>
  <div class="footer-block">
    <div class="container">
      <div class="row">
        <div class="col-6">

          <img 
            src="@/assets/images/YourMealBottom.svg" 
            alt="logo"
          >

          <div class="footer-block__copyright">
            &copy; YouMeal, 2022
          </div>

        </div>

        <div class="col-6">
          <div class="footer-block__content">

            <div class="footer-block__content_phone">
              <p class="footer-block__content_title">Номер для заказа</p> 
              <img 
                src="@/assets/images/icons/Call.svg" 
                alt="phone"
                class="footer-block__content_icon"
              >
              <span class="footer-block__content_number">
                +7(930)833-38-11
              </span>
              
            </div>     

            <div class="footer-block__social">
              <p class="footer-block__social_title">Мы в соцсетях</p>

              <img 
                src="@/assets/images/icons/vk.svg" 
                alt="social"
                class="footer-block__social_vk"
              >

              <img 
                src="@/assets/images/icons/tg.svg" 
                alt="social"
                class="footer-block__social_tg"
              >
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<script>
  export default {
    name: 'FooterBlock'
  }
</script>

<style lang="scss" scoped>
.footer-block {
  margin-top: 100px;
  background: #fff;
  height: 244px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  color: #000;



  &__copyright {
    margin-top: 70px;

    font-size: 12px;
    line-height: 16px;
  }

  &__content {
    display: flex;
    justify-content: space-between;


    &_title {      
      font-size: 24px;
      line-height: 100%;
      margin-bottom: 25px;
    }

    &_number {
      font-size: 16px;
      line-height: 130%;
    }
  }

  &__social{ 

    &_title {
      font-size: 24px;
      line-height: 100%;
      margin-bottom: 25px;

    }

    &_vk { 
      margin-right: 8px;
    }

    &_tg {
      margin-left: 8px;
    }
  }


}

</style>

