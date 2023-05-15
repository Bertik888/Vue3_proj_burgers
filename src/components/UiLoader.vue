<template>
  <div 
    v-if="isShow"
    class="ui-loader">
    
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="ui-loader__spinner"
    >
      <path
        d="M9.99987 1C14.9704 1 19 5.02934 19 9.99987C19 14.9704 14.9704 19 9.99987 19C5.02934 19 1 14.9707 1 10.0001"
        :stroke="color"
        :stroke-width="thickness"
      />
    </svg>
    

  </div>
</template>

<script>
  export default {
    name: 'UiLoader',

    props: {
      isShow: {
        type: Boolean,
        default: false
      },

      color: {
        type: String,
        default: '#FFF'
      },
      size: {
        type: Number,
        default: 40
      },
      thickness: {
        type: Number,
        default: 2
      }
    }
  }
</script>

<style lang="scss" scoped>

.ui-loader {
  position: fixed;
  background: rgba(0, 0, 0, 0.8); 
  left: 0; 
  right: 0; 
  top: 0; 
  bottom: 0; 
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;

  &__spinner {
    vertical-align: middle;
    animation: spinner 1s linear infinite;
    transform-origin: center center;    
  }
  svg:not(:root) {
    overflow: hidden;
  }
}

@keyframes spinner {
  0% {
    transform: rotate3d(0,0,1,0)
  }
  25% {
    transform: rotate3d(0,0,1,90deg)
  }
  50% {
    transform: rotate3d(0,0,1,180deg)
  }
  75% {
    transform: rotate3d(0,0,1,270deg)
  }
  to {
    transform: rotate3d(0,0,1,359deg)
  }
}
</style>