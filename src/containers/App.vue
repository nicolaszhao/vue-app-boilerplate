<template>
  <div class="container">
    <header class="header">
      <h1>Vue Boilerplate</h1>
      <nav>
        <ul>
          <li v-for="item of navigators" :key="item.path">
            <router-link 
              active-class="nav-active"
              :to="item.path" 
              :exact="item.path === '/'"
            >
              {{ item.text }}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import { navigators } from './router';

export default {
  data: () => ({
    navigators
  }),
  mounted() {

    // for element:active
    document.body.addEventListener('touchstart', () => {});

  }
}
</script>

<style lang="scss">
  @import "../styles/base";

  .container {
    padding: .8em;
  }

  .header {
    margin-bottom: 1em;

    h1 {
      margin-bottom: .4em;
    }

    nav {
      li {
        display: inline-block;
        padding: 0 .5em;

        &:not(:last-child) {
          border-right: solid 1px rgba(0, 0, 0, .2);
        }
      }
    }

    .nav-active {
      text-decoration: underline dotted #ccc;
      color: #0cf;
    }
  }

  .content {
    padding: 2em 0;
  }
</style>
