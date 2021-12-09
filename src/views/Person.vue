<template>
  <div>
    <v-container style="width: 60%">
      <v-row
        class="fill-height ma-0 container picker"
        align="center"
        justify="center"
      >
        <v-card class="mx-auto" min-width="80%" outlined>
          <v-card-title>个人信息</v-card-title>

          <div>
            <v-divider class="my-2"></v-divider>
            <v-row>
              <v-col>
                <v-card class="pa-2" :flat="true">
                  <label class="label"><strong>用户名</strong></label>
                  <span class="label-value" v-html="userName"></span>
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card class="pa-2" :flat="true">
                  <label class="label"><strong>姓名</strong></label>
                  <span class="label-value" v-html="realName"></span>
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card class="pa-2" :flat="true">
                  <label class="label"><strong>家庭住址</strong></label>
                  <span class="label-value" v-html="address"></span>
                </v-card>
              </v-col>

              <v-col>
                <v-card class="pa-2" :flat="true">
                  <label class="label"><strong>电话</strong></label>
                  <span class="label-value" v-html="telphone"></span>
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
          <v-card-title>安全信息</v-card-title>

          <div>
            <v-divider class="my-2"></v-divider>

            <v-row>
              <v-col class="md">
                <v-card class="pa-2" :flat="true">
                  <v-btn
                    color="#1867c0"
                    style="color: white"
                    @click="handleClick"
                    >修改密码</v-btn
                  >
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-row>
    </v-container>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="300">
        <v-card>
          <v-card-title class="text-h5"> 修改密码 </v-card-title>

          <v-form class="content">
            <v-text-field v-model="password" label="请输入新密码" type="password"> </v-text-field>
            <v-text-field v-model="password_copy" label="请再次输入密码" type="password">
            </v-text-field>
          </v-form>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="cancel">
              取消
            </v-btn>
            <v-btn color="green darken-1" text @click="ensure">
              确定
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Person",
  data: () => ({
    userName: "王二",
    realName: "王德清",
    address: "杭州三墩",
    telphone: "0517-82339905",
    dialog: false,
    password: "",
    password_copy: "",
  }),
  methods: {
    handleClick() {
      this.dialog = true;
    },
    cancel() {
      this.dialog = false;
      this.password = "";
      this.password_copy = "";
    },
    ensure() {
      if (this.password !== this.password_copy) {
        alter("两次输入密码不一致，请重新输入！");
      } else {
        alert("密码修改成功，请重新登录!");
        this.dialog = false;
        this.password = "";
        this.password_copy = "";
        this.$router.push("/login");
      }
    }
  },
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

.content {
  padding: 16px 24px 10px;
}
</style>
