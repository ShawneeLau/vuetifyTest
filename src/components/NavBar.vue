<template>
  <v-container>
    <v-toolbar
      flat
      color="grey lighten-4"
    >
      <v-toolbar-title>
        个人智能电表管理系统
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :to="item.path" text v-for="item in tabs" v-bind:key="item.path">{{ item.tab }}</v-btn>
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
          { path: '/current', tab: '当前用电量' },
          { path: '/history', tab: '历史用电量' },
          { path: '/bill', tab: '历史账单' },
          { path: '/topup', tab: '在线充值' },
          { path: '/event', tab: '电表事件列表' },
          // { path: '/person', tab: '个人信息' },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
