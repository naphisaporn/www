<template>
  <v-app>
    <v-app-bar
      app
      color= #F6F4E8
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Wisdomworld Logo"
          class="shrink mr-2"
          contain
          src="https://sn3302files.storage.live.com/y4mbc_-sRHnlaUhZdm_ja-Eu8qRP_gRamM_MUKEfbciNJIRmd9dF5SwsigOVlg2vGbLK9BnHU0gHPFPvT1yFYQxhAdcmf0HcKbacMmr5rsSMC8mhpHaBoWfdMUrgwUWOYreFtwECYb4tHUI5_-90a0gfpxJwbgyKOkvANuaC8yKN_G12Qb4oC_vPwjLEhKoq4W-aCUD14biXYKftzDQrwgyHg/WISDOM%20WORLD%20MEDICALv2.jpg?psid=1&width=580&height=258"

          transition="scale-transition"
          width="40"
        />

       
      </div>

   <v-spacer></v-spacer>

     
      <Header />
    </v-app-bar>

    <v-content>
      <Content />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Content from "@/components/layout/Content.vue";

export default {
  name: 'App',

  components: {
    Header,
    Content,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
