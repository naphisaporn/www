<template>
  <div class="home">
    <v-carousel hide-delimiters cycle >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      height="300"
      reverse-transition="fade-transition"
      transition="fade-transition"
     
    >
    
    
<v-row
            class="fill-height title"
            align="center"
            justify="center"
          >
            <div>{{ item.title }}</div>
          </v-row>

     
    </v-carousel-item>
  </v-carousel>
  <Product />
  <br>
  <br>
  <br>
  <Blog />
    <!-- <div id="home" class="content-wrapper">
      test

    </div>
    <img alt="Vue logo" src="../assets/logo.png">
      
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Product from "../views/Product.vue";
import Blog from "../views/Blog.vue";


export default {
  name: 'Home',
  components: {
   // HelloWorld
   Product,
   Blog
  },
  data () {
      return {
        items: [
          {
            src: require("../assets/banner.png"),
            title: "Wisdomworld"
          },
          // {
          //   src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          //               title: "Wisdomworld"

          // },
          // {
          //   src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          //               title: "Wisdomworld"

          // },
          // {
          //   src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          // },
        ],
      }
    },
}
</script>

<style scoped>
.content-wrapper {
  margin: auto;
  padding: 100px;
  border-width: 0px;
  border-color: gray;
  border-style: dashed;
}

</style>