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
          { path: '/home', tab: '首页曲线图形展示' },
          { path: '/record', tab: '历史用电量' },
          { path: '/about', tab: '历史账单' },
          { path: '/about', tab: '在线充值' },
          { path: '/about', tab: '电表事件列表' },
          { path: '/person', tab: '个人信息' },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
