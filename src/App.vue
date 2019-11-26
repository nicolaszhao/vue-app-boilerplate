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
            active-class="nav-active"
            :to="item.path"
            :exact="item.path === '/'"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view />
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
  padding: 0.8em;

  h1 {
    margin-top: 0;
    text-align: center;
  }
}

h1, h2, h3 {
  margin: .8em 0 .6em;
}

.nav {
  text-align: center;

  li {
    display: inline-block;
    padding: 0 .5em;

    &:not(:last-child) {
      border-right: solid 1px rgba(0, 0, 0, .2);
    }
  }

  &-active {
    text-decoration: underline dotted #ccc;
    color: #0cf;
  }
}
</style>
