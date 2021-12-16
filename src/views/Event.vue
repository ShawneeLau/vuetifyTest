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
        <v-col>
        <v-select
          :items="event_types"
          label="请选择事件类型"
        ></v-select>
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
          style="width: 100%"
        >
        </v-data-table>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Event",
  data: () => ({
    date: ["2021-11-01", "2021-11-20"],
    menu: false,

    event_types: ['日常事件', '突发事件', '维修事件'],

    headers: [
      {
        text: "日期",
        align: "start",
        sortable: false,
        value: "date",
      },
      { text: "事件名称", value: "event_name", sortable: false },
      { text: "事件类型", value: "event_type", sortable: false },
    ],
    desserts: [
      {
        id: 0,
        date: "2021-12-01",
        event_name: "变压器维修",
        event_type: "维修事件"
      },
      {
        id: 1,
        date: "2021-12-02",
        event_name: "缴费",
        event_type: "日常事件"
      },
      {
        id: 2,
        date: "2021-12-01",
        event_name: "跳闸",
        event_type: "突发事件"
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
