<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view></router-view>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>

  import Header from './components/header.vue'
  import Footer from './components/footer.vue'

export default {
  name: 'app',
  components: {
    Header, Footer
  }
}
</script>

<style lang="scss">

  *::after, *::before, *{ box-sizing: border-box }
  * { padding: 0; margin: 0; }
  html, body { height: 100% }
  #app { min-height: 100% }

#app {
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'header header header'
                       '.      main   .     '
                       'footer footer footer';

  #header {
    grid-area: header;
    padding-right: 12%;
    padding-left: 12%;
  }
  #main {
    grid-area: main;
    border: 1px solid red;
  }
  #footer {
    grid-area: footer;
    padding-right: 12%;
    padding-left: 12%;
  }
}
</style>
