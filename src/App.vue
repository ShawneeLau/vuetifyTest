<template>
  <v-app>  
    <v-app-bar
      app
      flat
      v-if="!is_login"
    >
      <v-app-bar-nav-icon class="hidden-md-and-up"  @click="drawer = !drawer" />

      <NavBar />
    </v-app-bar>
    
    <v-main>
      <router-view />
      <!-- <Footer v-if="!is_login"/> -->
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from "./components/NavBar";
  import Footer from "./components/Footer";

  export default {
    name: 'App',
    components: {
      NavBar,
      Footer
    },

    data: () => ({
      drawer: false,
      items: [
        { title: 'Home', icon: 'mdi-folder', path: '/home' },
        { title: 'Message', icon: 'mdi-folder', path: '/record' },
        { title: 'About', icon: 'mdi-folder', path: '/about' },
        { title: 'Person', icon: 'mdi-folder', path: '/person' },
      ],
      is_login: true,
    }),

    watch: {
      '$route': 'getPath'
    },

    methods: {
      getPath() {
        this.is_login = this.$route.path === '/login';
      }
    }
  };
</script>
