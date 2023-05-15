<template>
  <div
    @click.self="$emit('hide')"
    v-if="isOpen" 
    class="overlay"
  >
    <div class="content">
      <img 
        src="@/assets/images/icons/close.svg" 
        alt="close"
        class="close"
        @click="$emit('hide')"
      >
      <slot></slot>

    </div>
  </div>
</template>

<script>
  export default {

    props: {
      isOpen: {
        type: Boolean,
        default: false
      }
    }
    
  }
</script>

<style lang="scss">
.overlay {
  position: fixed;
  background: rgba(0, 0, 0, 0.8); 
  left: 0; 
  right: 0; 
  top: 0; 
  bottom: 0; 
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  overflow: hidden;
  width: 100%;
  max-width: 684px;
  min-height: 432px;
  height: auto;
  position: relative;
  display: flex;
}

.close {
  position: absolute;
  z-index: 10;
  width: 24px; 
  height: 24px;
  right: 24px;
  top: 24px;
  cursor: pointer;
}

</style>