<template>
  <div id="app">
    <top-header :key="$route.fullPath" :sidebarToggle="sidebarToggle"></top-header>
    <b-row>
      <!-- <b-col v-if="sidebarVisible" cols="2">
        <Sidebar></Sidebar>
      </b-col> -->
      <b-col>
        <b-container>
            <router-view/>
        </b-container>
      </b-col>   
    </b-row>
    <Footer></Footer>
  </div>
</template>

<script>
import TopHeader from './components/layout/Header'
import Content from './components/layout/Content'
import Footer from './components/layout/Footer'
// import Sidebar from './components/layout/Sidebar'

export default {
  name: 'app',
  components: {
    TopHeader,
    Content,
    Footer,
    // Sidebar
  },
  data () {
    return {
      // sidebarVisible: false
    }
  },
  mounted () {
  },
  methods: {
    // sidebarToggle () {
    //   this.sidebarVisible = !this.sidebarVisible
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
