<template>
  <div class="text-right">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#1867c0" v-bind="attrs" v-on="on" style="color: white">个人中心</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="handleAction(item.name)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    name: "PersonInfo",
    data: () => ({
      items: [
        { title: '用户信息', name: 'user_info'},
        { title: '退出登录', name: 'logout'}
      ]
    }),
    methods: {
      handleAction(name) {
        if (name === 'user_info') {
          this.$router.replace('/person');
        } else {
          this.$router.replace('/login');
        }
      }
    }
  }
</script>

<style scoped>
 
</style>
