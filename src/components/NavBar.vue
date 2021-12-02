<template>
  <v-container>
    <v-toolbar
      flat
      color="grey lighten-4"
    >
      <v-toolbar-title>
        最终客户页面
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :to="item.path" text v-for="item in tabs">{{ item.tab }}</v-btn>
      </v-toolbar-items>
      <PersonInfo />
    </v-toolbar>
  </v-container>
</template>

<script>
  import PersonInfo from "../components/person/PersonInfo.vue";
  export default {
    name: "NavBar",
    components: {
      PersonInfo
    },
    data() {
      return {
        tabs: [
          { path: '/home', tab: 'Home' },
          { path: '/record', tab: 'Record' },
          { path: '/about', tab: 'About' },
          { path: '/person', tab: 'Person' },
          { path: '/about', tab: 'About' },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
