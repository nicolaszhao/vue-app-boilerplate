<template>
  <div id="app">
    <h1>Vue App Boilerplate</h1>
    <nav class="nav">
      <ul>
        <li
          v-for="item in menus"
          :key="item.path"
        >
          <router-link
            active-class="active"
            :to="item.path"
            :exact="item.path === '/'"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { routes } from './router';

export default {
  data: () => ({
    routes,
  }),
  computed: {
    menus() {
      return this.routes
        .filter((route) => route.name)
        .map(({ path, name }) => ({
          name: name.charAt(0).toUpperCase() + name.slice(1),
          path,
        }));
    },
  },
  mounted() {
    // for element:active
    document.body.addEventListener('touchstart', () => {});
  },
};
</script>

<style lang="scss">
#app {
  padding: 1em;

  h1, h2, h3 {
    margin: .8em 0 .4em;
  }

  h1 {
    text-align: center;
  }
}

.content {
  padding: .8em;
}

.nav {
  text-align: center;

  li {
    display: inline-block;
    padding: 0 .8em;

    &:not(:last-child) {
      border-right: solid 1px rgba(0, 0, 0, .2);
    }
  }

  .active {
    text-decoration: underline dotted #ccc;
    color: #0cf;
  }
}

.input {
  padding: .4em;
  border: solid 1px rgba(0, 0, 0, .3);
  border-radius: .2em;
}

.button {
  border: solid 1px rgba(0, 0, 0, .4);
  border-radius: .2em;
  padding: .4em .8em;
  background: linear-gradient(transparent 50%, rgba(0, 0, 0, .1) 50%);
  text-shadow: 0 1px 0 #fff;

  &:active {
    background-color: rgba(0, 0, 0, .4);
  }
}
</style>
