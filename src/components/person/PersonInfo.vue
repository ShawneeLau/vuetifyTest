<template>
  <div class="text-right">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#d0d0d0" v-bind="attrs" v-on="on">个人中心</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
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
        { title: 'userinfo' },
        { title: 'logout '}
      ]
    })
  }
</script>

<style scoped>
 
</style>
