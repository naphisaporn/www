<template>
  <div id="footer" class="footer">
    <v-footer color="#F6F4E8" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="Black"
          text
          rounded
          router
          :to="link.route"
        >
          {{ link.title }}
        </v-btn>
        <v-col class="#F6F4E8" cols="12">
          {{ new Date().getFullYear() }} — <strong>Wisdomworld</strong>
        </v-col>
      </v-row>
    </v-footer>
    <!-- <span :style="{color}">{{title}}</span> -->
  </div>
</template>

<script>
//import Blog from "../views/Blog.vue";

export default {
  name: "Footer",
  data: () => ({
    links: [
      { title: "Home", route: "/" },
      { title: "Product", route: "/Product" },
      { title: "News", route: "/Blog" },
      { title: "About us", route: "/About" },
      { title: "Contact us", route: "/Contact" }
      // 'Home',
      // 'About Us',
      // 'Team',
      // 'Services',

      // 'Blog',
      // 'Contact Us',
    ]
  }),
  mounted() {
    setInterval(() => {
      this.$emit("onClock", Date());
    }, 100);
  },
  props: ["title", "color"]
};
</script>

<style scoped>
.footer {
  font-size: 12px;
  color: gray;
  padding-top: 15px;
  text-align: center;
  /* background-color: #F6F4E8; */
  -webkit-background-size: cover;
  background-size: cover;
}
</style>
