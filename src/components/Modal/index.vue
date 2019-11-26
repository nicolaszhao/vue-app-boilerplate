<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <header class="modal-header">
          <h1>{{ title }}</h1>
          <button
            class="modal-close-button"
            @click="$emit('close')"
          />
        </header>
        <section class="modal-content">
          <slot />
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
.modal {
  &-mask {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
  }

  &-container {
    width: 300px;
    padding: 1.2em;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 4px 8px -4px rgba(0, 0, 0, .2);
  }

  &-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    position: relative;

    h1 {
      margin: 0;
    }
  }

  &-close-button {
    width: 1.2em;
    height: 1.2em;
    position: relative;

    &:before,
    &:after {
      content: "";
      display: block;
      width: 70%;
      height: 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0) rotate(45deg);
      background: rgba(0, 0, 0, .3);
    }

    &:after {
      transform: translate3d(-50%, -50%, 0) rotate(-45deg);
    }

    &:active:before,
    &:active:after {
      background: rgba(0, 0, 0, .6);
      transition: all 0.4s ease;
    }
  }

  &-content {
    margin: 1.2em 0;
  }

  &-enter,
  &-leave-to {
    opacity: 0;

    .modal-container {
      transform: scale(1.1);
    }
  }

  &-enter,
  &-leave {
    &-active {
      transition: .4s;

      .modal-container {
        transition: .4s ease-out;
      }
    }
  }
}
</style>
