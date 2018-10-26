<template>
  <div class="counter-container">
    <h2>Counter</h2>
    <section class="counter-content">
      <input class="input" v-model="amount" />
      <button class="button" @click="increment(+amount)"> + </button>
      <button class="button" @click="decrement(+amount)"> - </button>
      <span class="counter-count">{{ count }}</span>
    </section>
  </div>
</template>

<script>
import {  mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    amount: 1
  }),
  computed: {
    ...mapState('counter', ['count'])
  },
  methods: {
    ...mapActions('counter', [
      'increment',
      'decrement'
    ])
  }
}
</script>

<style lang="scss">
.counter-container {
  h2 {
    margin-bottom: .4em;
  }
}

.counter-content {
  padding: .6em 0;
}

.counter-count {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 50vw;
  margin: 0 auto;
  font-size: 3em;
}
</style>


