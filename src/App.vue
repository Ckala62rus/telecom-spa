<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/equipment-types">Equipment-types</router-link> |
      <router-link to="/equipment">Equipment</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    // HelloWorld
  },

  data() {
    return {
      // auth: false
    }
  },

  watch: {
    '$route.params': {
      handler: function() {
        console.log('test')
        this.getMe()
      },
      deep: true,
      immediate: true
    }
  },

  methods: {
    getMe(){
      this.axios.post('/api/me').then(res => {
        console.log(res)
      })
    },
  },

  mounted() {
    console.log(process.env)
    this.auth = localStorage.getItem('auth')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
