<template>
  <div id="Blog">
    <v-container>
      <h2>News</h2>
      <br />
      <h3>-------------</h3>
      <v-row>
        <v-col cols="4" v-for="item in items" :key="item.id" >
          <v-card outlined class="mx-auto elevation-5" color="#D9F1F1" light>
            <v-img
              class="white--text align-end"
              height="auto"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              :src="item.src"
            >
              <v-card-title gradient="5">{{ item.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">{{ item.subtitle }}</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ item.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="blue" text 
              router
                 :to="item.route">More</v-btn>
              <!-- <v-btn color="orange" text>
                Share
              </v-btn>

              <v-btn color="orange" text>
                Explore
              </v-btn>-->
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "wisdomworld",
          subtitle: "",
          description:
            "บริษัทนำเข้าผลิตภัณฑ์เสริมอาหาร ที่ได้รับมาตรฐาน และเป็นที่นิยม จาก U.S.A โดยนำเข้า 100%",
          src: require("../assets/www_logo.jpg"),
          route: "/Blog_detail"
        }
      ]
    };
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
}
h3 {
  text-align: center;
}
</style>
//  :src="item.src"