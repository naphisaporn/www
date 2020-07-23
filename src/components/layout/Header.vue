<template>
  <div id="header">
    <v-row justify="center" no-gutters style="margin-right:5px;">
      <v-btn
        v-for="link in links"
        :key="link"
        color="red"
        text-color="black"
        rounded
        router
        :to="link.route"
        style="margin:5px"
      >{{ link.title }}</v-btn>
    </v-row>
   
  </div>
</template>

<script>
export default {
  name: "header",
  data: () => ({
    links: [
      { title: "Home", route: "/" },
      { title: "Product", route: "/ProductCategory" },
      { title: "News", route: "/Blog" },
      { title: "About us", route: "/About" },
      { title: "Contact us", route: "/Contact" },
         
    ]
  })
};
</script>

<style scope>
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  margin-right: 10px;
  margin-left: 10px;
}
</style>
<style>
#header {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* background-color: #f6f4e8; */
}
</style>
