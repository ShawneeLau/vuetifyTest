<template>
  <div>
    <v-container style="width: 60%;"><!-- 居中 -->
      <v-row class="fill-height ma-0 container"
              align="center"
              justify="center">

        <v-card
          width="80%"
        >
          <v-card-title>近一个月用电量</v-card-title>

          <v-divider class="my-2"></v-divider>
          
          <v-sheet
            class="v-sheet--offset mx-auto spark-container"
            color="gray"
            elevation="0"
            max-width="calc(100% - 32px)"
          >
            <v-sparkline
              :labels="labels0"
              :value="value0"
              :gradient="gradient0"
              :smooth="radius || false"
              :padding="padding"
              :line-width="width"
              :stroke-linecap="lineCap"
              :gradient-direction="gradientDirection"
              :fill="fill"
              :type="type"
              :auto-line-width="autoLineWidth"
              color="white"
              label-size=4
              show-labels=true
            ></v-sparkline>
          </v-sheet>

          <!-- 这一行就是单纯留一个空行出来 -->
          <v-card-text class="pt-0"></v-card-text>
        </v-card>

      </v-row>

      <v-row class="fill-height ma-0 container"
              align="center"
              justify="center">
        
        <v-card
          width="80%"
        >
          <v-card-title>近一个月电费值</v-card-title>

          <v-divider class="my-2"></v-divider>
          
          <v-sheet
            class="v-sheet--offset mx-auto spark-container"
            color="gray"
            elevation="0"
            max-width="calc(100% - 32px)"
          >
            <v-sparkline
              :labels="labels1"
              :value="value1"
              :gradient="gradient1"
              :smooth="radius || false"
              :padding="padding"
              :line-width="width"
              :stroke-linecap="lineCap"
              :gradient-direction="gradientDirection"
              :fill="fill"
              :type="type"
              :auto-line-width="autoLineWidth"
              color="white"
              label-size=4
              show-labels=true
            ></v-sparkline>
          </v-sheet>

          <!-- 这一行就是单纯留一个空行出来 -->
          <v-card-text class="pt-0"></v-card-text>
        </v-card>
        
        <!-- <v-sparkline
          :value="value"
          :gradient="gradient"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw
        ></v-sparkline> -->
      </v-row>
    </v-container>
    <!-- <Carousel />
    <ImageGrid />
    <Recently /> -->
  </div>
</template>

<script>
  import Carousel from "../components/home/Carousel";
  import ImageGrid from "../components/home/ImageGrid";
  import Recently from "../components/home/Recently";
  
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]


  export default {
    name: "Home",
    components: {
      Carousel,
      ImageGrid,
      Recently,
    },
    data: () => ({
      width: 10,
      radius: 0,
      padding: 8,
      lineCap: 'round',
      gradient0: gradients[4],
      gradient1: gradients[5],
      value0: [
        1.2, 2, 5, 9, 5, 
        10, 3, 5, 0.1, 5.4, 
        1, 8, 2, 9, 3
      ],
      value1: [
        1.2, 2, 5, 9, 5, 
        10, 3, 5, 0.1, 5.4, 
        1, 8, 2, 9, 3
      ],
      labels0: [
        '11月1日', '11月2日', '11月3日', '11月4日', '11月5日', 
        '11月6日', '11月7日', '11月8日', '11月9日', '11月10日', 
        '11月11日', '11月12日', '11月13日', '11月14日', '11月15日'],
      labels1: [
        '11月1日', '11月2日', '11月3日', '11月4日', '11月5日', 
        '11月6日', '11月7日', '11月8日', '11月9日', '11月10日', 
        '11月11日', '11月12日', '11月13日', '11月14日', '11月15日'],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'bar',
      autoLineWidth: false,
    }),
  }
</script>

<style scoped>

.spark-container {
  padding-top: 20px;
}

</style>
