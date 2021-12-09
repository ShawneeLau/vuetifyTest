<template>
  <div>
    <v-container style="width: 60%">
      <v-row
        class="fill-height ma-0 container picker"
        align="center"
        justify="center"
      >
        <v-card class="mx-auto" min-width="80%" outlined>
          <v-card-title>账号信息</v-card-title>

          <div>
            <v-divider class="my-2"></v-divider>
            <v-row>
              <v-col>
                <v-card class="pa-2" :flat=true>
                  <label class="label"><strong>用户名</strong></label>
                  <span class="label-value" v-html="userName"></span>
                </v-card>
              </v-col>

              <v-col>
                <v-card class="pa-2" :flat=true>
                  <label class="label"><strong>户号</strong></label>
                  <span class="label-value" v-html="account"></span>
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card class="pa-2" :flat=true>
                  <label class="label"><strong>地址</strong></label>
                  <span class="label-value" v-html="address"></span>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-row>

      <v-row
        class="fill-height ma-0 container picker"
        align="center"
        justify="center"
      >
        <v-card class="mx-auto" min-width="80%" outlined>
          <v-card-title>电表信息</v-card-title>

          <div>
            <v-divider class="my-2"></v-divider>
            <v-row>
              <v-col>
                <v-card class="pa-2" :flat=true>
                  <label class="label"><strong>上次抄读时间</strong></label>
                  <span class="label-value" v-html="lastReadTime"></span>
                </v-card>
              </v-col>

              <v-col>
                <v-card class="pa-2" :flat=true>
                  <label class="label"><strong>表号</strong></label>
                  <span class="label-value" v-html="clockNo"></span>
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card class="pa-2" :flat=true>
                  <label class="label"><strong>上次读数</strong></label>
                  <span class="label-value" v-html="lastReadValue"></span>
                </v-card>
              </v-col>

              <v-col>
                <v-card class="pa-2" :flat=true>
                  <label class="label"><strong>表型</strong></label>
                  <span class="label-value" v-html="clockType"></span>
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card class="pa-2" :flat=true>
                  <label class="label"><strong>剩余金额</strong></label>
                  <span class="label-value" v-html="extraMoney"></span>
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col class="md">
                <v-card class="pa-2" :flat=true>
                  <label class="label"><strong>充值</strong></label>
                  <input v-model="fillMoney" style="width: 30px" />
                  <label class="label"><strong>元</strong></label>
                  <v-btn color="#1867c0" style="color: white" @click="handleClick">确认充值</v-btn>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Topup",
  data: () => ({
    userName: "王二",
    account: "SN0001",
    address: "华立有限公司",
    lastReadTime: "2021-11-01 12:00:00",
    clockNo: "CLA2000181212",
    lastReadValue: 101.2,
    clockType: "智能型三相电表",
    extraMoney: 0.33,

    fillMoney: 100,
  }),
  methods: {
    handleClick() {
      let status = confirm("您确认充值" + this.fillMoney.toString() + "元吗？");
      if (status) {
        this.extraMoney += this.fillMoney;
        this.fillMoney = 0;
      }
    }
  }
};
</script>

<style scoped>
.label {
  display: inline-block;
  min-width: 200px;
  text-align: center;
}

.label-value {
  font-size: 12px;
}
</style>
