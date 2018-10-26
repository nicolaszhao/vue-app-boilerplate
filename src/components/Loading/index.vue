<template>
  <transition name="loading">
    <div class="loading">
      <span class="loading-text">Loading...</span>
    </div>
  </transition>
</template>

<style lang="scss">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 199;
  background: rgba(0, 0, 0, .4);

  &:before,
  &:after {
    content: '';
  }

  &:before,
  &:after,
  &-text {
    width: 0.75em;
    height: 0.75em;
    margin: 0 0.4em;
    border-radius: 50%;
    background: #fff;
    transform: scale(0);
    animation: loading-points 1.8s ease infinite;
  }

  &-text {
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation-delay: 0.2s;
  }

  &:after {
    animation-delay: 0.4s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter,
  &-leave {
    &-active {
      transition: .4s ease-out;
    }
  }
}

@keyframes loading-points {
  30% {
    transform: scale(1);
    animation-timing-function: ease-in;
  }

  60% {
    transform: scale(0);
  }
}
</style>
