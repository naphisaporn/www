<template>
  <div id="Blog_detail">
    <v-container>
      <v-container flat v-for="card in cards" :key="card.id" class="elevation-10">
        <v-row class="justify-center">
          <v-avatar size="auto" tile>
            <v-img :src="card.src" contain height="300" width="auto" />
          </v-avatar>
        </v-row>

        <v-row  id="bg" class="justify-center">
          <v-col cols="12" id="style" >
            <v-container-title class="mt-15 mb-10 text-h3 justify-center" max-width="1024" flat>
              <div class="justify-center">{{card.title}}</div>
            </v-container-title>
          </v-col>
          <v-col cols="12">
            <v-container-text class="text-subtitle-1 font-weight-light ml-15">
             <p class="text-justify">{{card.description}}</p>
            </v-container-text>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Blog_detail",
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "wisdomworld",
          subtitle: "",
          description:
            "บริษัทนำเข้าผลิตภัณฑ์เสริมอาหาร ที่ได้รับมาตรฐาน และเป็นที่นิยม จาก U.S.A โดยนำเข้า 100%",
          src: require("../assets/www_logo.jpg")
        }
      ]
    };
  }
};
</script>

<style>
#bg {
  background-color: lemonchiffon;
  
}
#style {
    text-align: center;

}
</style>