<template>
  <div :class="$style.container">
    <h2>Home</h2>
    <section :class="$style.profile">
      <h3>User Profile</h3>
      <ul>
        <li
          v-for="(value, name) in data"
          :key="value"
        >
          <strong>{{ name }}:</strong>
          <span>{{ value }}</span>
        </li>
      </ul>
      <footer :class="$style['profile-footer']">
        <button
          class="button"
          @click="fetch()"
        >
          Refresh
        </button>
      </footer>
    </section>
    <section :class="$style.counter">
      <h3>Counter</h3>
      <div :class="$style['counter-controls']">
        <label>
          Amount:
        </label>
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
        <span :class="$style['counter-value']">{{ count }}</span>
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
      <p :class="$style.error">
        {{ error.message }}
      </p>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Loading from '@/components/Loading';
import Modal from '@/components/Modal';

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

<style lang="scss" module>
.container {
  padding: .8em;
}

.profile {
  li strong {
    display: block;
    margin: .8em 0 .4em;
    font-weight: bold;
  }

  &-footer {
    margin-top: 1em;
  }
}

.counter {
  &-controls {
    display: flex;

    label {
      margin-right: .4em;
      padding: .2em 0;
    }

    :global(.input) {
      width: 4em;
      margin-right: 2em;
      text-align: center;
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
  padding: .5em;
  background: #fcfabe;
  color: #f00;
}
</style>
