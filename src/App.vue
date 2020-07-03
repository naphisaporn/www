<template>
  <div id="app">
    <Header />
    <Content />
     <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="Home2">Home2</router-link></li>
      <li><router-link to="Event">Event</router-link></li>
      <li><router-link to="Data">Data</router-link></li>
      <li><router-link to="Compute">Compute</router-link></li>
      <li><router-link to="Blinding">Blinding</router-link></li>
      <li><router-link to="Form">From</router-link></li>
    </ul> -->
    

    <Footer
      @onClock="onClock"
      title="Copyright 2020 by wisdomworld"
      color="gray"
    />
    <div class="clock">{{ time }}</div>

    <!-- <span class="title">1234</span> -->
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import moment from "moment";
import Content from "@/components/layout/Content.vue";


export default {
  name: "app",
  methods: {
    onClock(value) {
      this.time = moment(value).format("MM/DD/YYYY hh:mm:ss");
    }
  },
  data() {
    return {
      time: ""
    };
  },
  components: {
    Header,
    Footer,
    Content
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  margin-right: 10px;
}
.title {
  font-size: 30px;
  color: blue;
}
</style>
<style>
.content {
  color: blueviolet;
}
.clock {
  font-size: 12px;
  color: gray;
  text-align: center;
  margin: 10px;
}
