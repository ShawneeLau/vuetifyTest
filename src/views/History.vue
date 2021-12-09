<template>
  <div>
    <v-container style="width: 60%">
      <v-row
        class="fill-height ma-0 container picker"
        align="center"
        justify="center"
      >
        <v-col cols="12" sm="6" md="4">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="选择需要查询的时间范围"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              no-title
              scrollable
              range
              locale="zh-cn"
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> 取消 </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                确认
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer />
        <v-btn>查询</v-btn>
      </v-row>

      <v-divider class="my-2"></v-divider>

      <v-row class="fill-height ma-0 container" align="center" justify="center">
        <v-data-table
          :headers="headers"
          :items="desserts"
          item-key="id"
          class="elevation-1"
        >
        </v-data-table>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "History",
  data: () => ({
    date: ["2021-11-01", "2021-11-20"],
    menu: false,

    headers: [
      {
        text: "日期",
        align: "start",
        sortable: false,
        value: "date",
      },
      { text: "用户", value: "user", sortable: false },
      { text: "电量(度)", value: "quantity", sortable: false },
      { text: "峰电(度)", value: "peak_quantity", sortable: false },
      { text: "谷电(度)", value: "valley_quantity", sortable: false },
      { text: "电费(元)", value: "money", sortable: false },
    ],
    desserts: [
      {
        id: 0,
        date: "20211101",
        user: "王二",
        quantity: 10,
        peak_quantity: 3,
        valley_quantity: 7,
        money: 5.3,
      },
      {
        id: 1,
        date: "20211101",
        user: "张三",
        quantity: 12,
        peak_quantity: 5,
        valley_quantity: 7,
        money: 8.0,
      },
      {
        id: 2,
        date: "20211101",
        user: "李四",
        quantity: 100,
        peak_quantity: 30,
        valley_quantity: 70,
        money: 53,
      },
      {
        id: 3,
        date: "20211102",
        user: "王二",
        quantity: 10,
        peak_quantity: 3,
        valley_quantity: 7,
        money: 5.3,
      },
      {
        id: 4,
        date: "20211102",
        user: "张三",
        quantity: 12,
        peak_quantity: 5,
        valley_quantity: 7,
        money: 8.0,
      },
      {
        id: 5,
        date: "20211102",
        user: "李四",
        quantity: 100,
        peak_quantity: 30,
        valley_quantity: 70,
        money: 53,
      },
      {
        id: 6,
        date: "20211103",
        user: "王二",
        quantity: 10,
        peak_quantity: 3,
        valley_quantity: 7,
        money: 5.3,
      },
      {
        id: 7,
        date: "20211103",
        user: "张三",
        quantity: 12,
        peak_quantity: 5,
        valley_quantity: 7,
        money: 8.0,
      },
      {
        id: 8,
        date: "20211103",
        user: "李四",
        quantity: 100,
        peak_quantity: 30,
        valley_quantity: 70,
        money: 53,
      },
      {
        id: 9,
        date: "20211104",
        user: "王二",
        quantity: 10,
        peak_quantity: 3,
        valley_quantity: 7,
        money: 5.3,
      },
      {
        id: 10,
        date: "20211104",
        user: "张三",
        quantity: 12,
        peak_quantity: 5,
        valley_quantity: 7,
        money: 8.0,
      },
      {
        id: 11,
        date: "20211104",
        user: "李四",
        quantity: 100,
        peak_quantity: 30,
        valley_quantity: 70,
        money: 53,
      },
      {
        id: 12,
        date: "20211105",
        user: "王二",
        quantity: 10,
        peak_quantity: 3,
        valley_quantity: 7,
        money: 5.3,
      },
      {
        id: 13,
        date: "20211105",
        user: "张三",
        quantity: 12,
        peak_quantity: 5,
        valley_quantity: 7,
        money: 8.0,
      },
      {
        id: 14,
        date: "20211105",
        user: "李四",
        quantity: 100,
        peak_quantity: 30,
        valley_quantity: 70,
        money: 53,
      },
      {
        id: 15,
        date: "20211106",
        user: "王二",
        quantity: 10,
        peak_quantity: 3,
        valley_quantity: 7,
        money: 5.3,
      },
      {
        id: 16,
        date: "20211106",
        user: "张三",
        quantity: 12,
        peak_quantity: 5,
        valley_quantity: 7,
        money: 8.0,
      },
      {
        id: 17,
        date: "20211106",
        user: "李四",
        quantity: 100,
        peak_quantity: 30,
        valley_quantity: 70,
        money: 53,
      },
      {
        id: 18,
        date: "20211107",
        user: "王二",
        quantity: 10,
        peak_quantity: 3,
        valley_quantity: 7,
        money: 5.3,
      },
      {
        id: 19,
        date: "20211107",
        user: "张三",
        quantity: 12,
        peak_quantity: 5,
        valley_quantity: 7,
        money: 8.0,
      },
      {
        id: 20,
        date: "20211107",
        user: "李四",
        quantity: 100,
        peak_quantity: 30,
        valley_quantity: 70,
        money: 53,
      },
      {
        id: 21,
        date: "20211108",
        user: "王二",
        quantity: 10,
        peak_quantity: 3,
        valley_quantity: 7,
        money: 5.3,
      },
      {
        id: 22,
        date: "20211108",
        user: "张三",
        quantity: 12,
        peak_quantity: 5,
        valley_quantity: 7,
        money: 8.0,
      },
      {
        id: 23,
        date: "20211108",
        user: "李四",
        quantity: 100,
        peak_quantity: 30,
        valley_quantity: 70,
        money: 53,
      },
    ],
  }),
};
</script>

<style scoped>
.picker {
  border: black 1px solid;
  border-radius: 5px;
}
</style>
