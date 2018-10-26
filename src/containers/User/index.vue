<template>
  <div class="user-container">
    <h2>User</h2>
    <div class="user-content">
      <button class="button" @click="fetch(id)">Fetch</button>
      <Loading v-if="fetching" />
      <Modal 
        title="Error"
        v-if="modalVisible"
        @close="closeModal"
      >
        <p class="user-error">{{ error.message }}</p>
      </Modal>
      <dl class="user-profile" v-if="data">
        <dt>Name</dt>
        <dd>{{ data.name }}</dd>
        <dt>Email</dt>
        <dd>{{ data.email }}</dd>
        <dt>Age</dt>
        <dd>{{ data.age }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Loading from 'components/Loading/index.vue';
import Modal from 'components/Modal/index.vue';

export default {
  data: () => ({
    modalVisible: false
  }),
  components: {
    Loading,
    Modal
  },
  computed: {
    id: () => Math.ceil(Math.random() * 100),
    ...mapState('user', ['fetching', 'data', 'error'])
  },
  methods: {
    closeModal() {
      this.modalVisible = false;
    },
    ...mapActions('user', ['fetch'])
  },
  watch: {
    error(val, prevVal) {
      if (val && val !== prevVal) {
        this.modalVisible = true;
      }
    }
  }
}
</script>

<style lang="scss">
.user-container {
  h2 {
    margin-bottom: .4em;
  }
}

.user-content {
  padding: .6em 0;
}

.user-profile {
  margin: 1em 0;

  dt {
    margin-bottom: .4em;
    font-size: 1.2rem;
    font-weight: bold;

    &:after {
      content: ':';
    }
  }

  dd {
    margin-bottom: .8em;
  }
}

.user-error {
  color: #f00;
}
</style>
