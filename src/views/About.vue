<template>
  <div class="About">
    <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" style="height:400px;">
      <v-row align="end" class="lightbox white--text pa-2 fill-height">
        <v-col>
          <v-container>
          <div class="subheading">About Us</div>
          </v-container>
        </v-col>
      </v-row>
    </v-img>
    <div class="Blok">
      <v-container>
      <h4>บริษัท วิสดอม เวิร์ด เมดิคอล จำกัด</h4>
      <h4>WORLD MEDICAL CO.,LTD.</h4>
      <br>
      <p>
        บริษัทนำเข้าผลิตภัณฑ์เสริมอาหาร ที่ได้รับมาตรฐาน และเป็นที่นิยม จาก
        U.S.A โดยนำเข้า 100%
      </p>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "About"
};
</script>
<style scope>
h4 {
  text-align: center;
  font-size: 30px;
}
p {
  text-align: center;
}
.subheading {
  font-size: 40px;
}

</style>
