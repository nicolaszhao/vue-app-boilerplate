<template>
  <div class="home">
    <h2>Home</h2>
    <section class="profile">
      <h3>User Profile</h3>
      <ul v-if="data">
        <li
          v-for="(value, name) in data"
          :key="value"
        >
          <strong>{{ name }}</strong>
          <span>{{ value }}</span>
        </li>
      </ul>
      <p>
        <button
          class="button"
          @click="fetch(id)"
        >
          Refresh
        </button>
      </p>
    </section>
    <section class="counter">
      <h3>Counter</h3>
      <div class="counter-controls">
        <input
          v-model="amount"
          class="input"
        >
        <button
          class="button"
          @click="decrement(+amount)"
        >
          -
        </button>
        <span class="counter-value">{{ count }}</span>
        <button
          class="button"
          @click="increment(+amount)"
        >
          +
        </button>
      </div>
    </section>
    <Loading v-if="fetching" />
    <Modal
      v-if="modalVisible"
      title="Error"
      @close="closeModal"
    >
      <p class="error">
        {{ error.message }}
      </p>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Loading from '../../components/Loading/index.vue';
import Modal from '../../components/Modal/index.vue';

export default {
  components: {
    Loading,
    Modal,
  },
  data: () => ({
    modalVisible: false,
    amount: 1,
  }),
  computed: {
    id() {
      return this.count;
    },
    ...mapState('user', ['fetching', 'data', 'error']),
    ...mapState('counter', ['count']),
  },
  watch: {
    error(val, prevVal) {
      if (val && val !== prevVal) {
        this.modalVisible = true;
      }
    },
  },
  mounted() {
    this.fetch(this.count);
  },
  methods: {
    closeModal() {
      this.modalVisible = false;
    },
    ...mapActions('user', ['fetch']),
    ...mapActions('counter', [
      'increment',
      'decrement',
    ]),
  },
};
</script>

<style lang="scss">
.profile {
  ul {
    margin-bottom: 1em;
  }

  li strong {
    display: inline-block;
    min-width: 5em;
    font-weight: bold;

    &::after {
      content: ':';
    }
  }
}

.counter {
  &-controls {
    display: flex;

    .input {
      width: 5em;
      margin-right: 2em;
    }
  }

  &-value {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    border: solid 1px rgba(0, 0, 0, .3);
    background: #f7f7f7;
  }
}

.error {
  color: #f00;
}

.button {
  padding: .5em 1em;
  border: solid 1px rgba(0, 0, 0, .3);
  border-radius: .2em;
  text-shadow: 0 1px 0 hsla(0, 0%, 100%, .8);
  transition: .4s;
  background: rgba(0, 0, 0, .2) linear-gradient(hsla(0, 0%, 100%, .3) 50%, transparent 0);

  &:active {
    background-color: rgba(0, 0, 0, .4);
  }
}

.input {
  padding: .5em;
  border: solid 1px rgba(0, 0, 0, .3);
  border-radius: .2em;
}
</style>
