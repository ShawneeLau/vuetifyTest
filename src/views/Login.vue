<template>
  <v-app>
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-text>
              <h1 class="text-center blue--text text--accent-2 display-2">Login</h1>
            </v-card-text>
            <v-card-text>
              <v-text-field label="Username" name="username" required></v-text-field>
              <v-text-field label="Password" name="password" required></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn rounded color="blue" dark @click="login()">Login</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "Login",
  methods: {
    login() {
      let _this = this;
      _this.$router.push("/home");
    }
  },
}
</script>
<style scoped>
/* div { */
  /* width: 100%; */
  /* height: 100%; */
  /* background-image: url("../assets/images/background.png"); */
  /* position: absolute; */
  /* opacity: 0.8; */
/* } */
v-main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/images/background.png");
  background-size: cover;
}
</style>