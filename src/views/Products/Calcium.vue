<template>
  <div id="Calcium">
    <v-container fluid>
      <v-toolbar color="pink lighten-4">
        <v-row class="justify-center">
          <v-menu open-on-hover bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="pink accent-1" class="ma-2" v-bind="attrs" v-on="on">ความเคลื่อนไหว</v-btn>
            </template>
            <v-list shaped>
              <v-list-item-group v-model="item" color="pink accent-2">
                <v-list-item v-for="item in items1" :key="item" link>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>

          <v-menu open-on-hover bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="pink accent-1" class="ma-2" v-bind="attrs" v-on="on">ตรวจสอบคุณสมบัติ</v-btn>
            </template>
            <v-list shaped>
              <v-list-item-group v-model="item" color="pink accent-2">
                <v-list-item v-for="item in items2" :key="item" link>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>

          <v-menu open-on-hover bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="pink accent-1" class="ma-2" v-bind="attrs" v-on="on">การทำคำสั่ง</v-btn>
            </template>
            <v-list shaped>
              <v-list-item-group v-model="item" color="pink">
                <v-list-item v-for="item in items3" :key="item" link>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>

          <v-menu open-on-hover bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="pink accent-1" class="ma-2" v-bind="attrs" v-on="on">การลา</v-btn>
            </template>
            <!-- <v-list shaped>
              <v-list-item-group v-model="item" color="pink accent-2">
                <v-list-item v-for="item in items4" :key="item" link>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list> -->
          </v-menu>

          <v-menu open-on-hover bottom offset-y cols="2">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="pink accent-1" class="ma-2" v-bind="attrs" v-on="on">การอบรม/ลาศึกษา</v-btn>
            </template>
            <v-list shaped>
              <v-list-item-group v-model="item" color="pink accent-2">
                <v-list-item v-for="item in items5" :key="item" link>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>

          <v-menu open-on-hover bottom offset-y cols="2">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="pink accent-1" class="ma-2" v-bind="attrs" v-on="on">สวัสดิการ</v-btn>
            </template>
            <v-list shaped>
              <v-list-item-group v-model="item" color="pink accent-2">
                <v-list-item v-for="item in items6" :key="item" link>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </v-row>
      </v-toolbar>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Calcium",
  data: () => ({
    expand: false,
    expand2: false,
    show: false,
    items1: [
      { text: "ตำแหน่ง", icon: "mdi-clock" },
      { text: "ข้อมูลบุคคล", icon: "mdi-account" },
      { text: "การเลื่อนเงินเดือน", icon: "mdi-flag" },
      {
        text: "การขอพระราชทานเครื่องราชอิสริยาภรณ์",
        icon: "mdi-flag"
      },
    ],
    items2: [
      { text: "การประเมินบุคคลเพื่อแต่งตั้งให้ดำรงตำแหน่งสูงขึ้น", icon: "mdi-clock" },
      { text: "เงินประจำตำแหน่ง", icon: "mdi-account" },
      { text: "เงิน พ.ต.ส.", icon: "mdi-flag" },
      { text: "เงินไปทำเวชปฎิบัติ", icon: "mdi-flag" },
      { text: "รายชื่อผู้ที่เกษียณแล้ว", icon: "mdi-flag" },
      { text: "รายชื่อผู้ที่เกษียณในปีต่าง ๆ", icon: "mdi-flag" },
      { text: "ผู้ที่ขาดคุณสมบัติไม่ได้รับค่าตอบแทน", icon: "mdi-flag" },
    ],
    items3: [
      { text: "บรรจุ/โอน/ย้าย/ลาออก", icon: "mdi-clock" },
      { text: "เกษียณ/ถึงแก่กรรม พ้นจากราชการ", icon: "mdi-clock" },
      { text: "การทำคำสั่งรักษาการไว้ล่วงหน้า", icon: "mdi-clock" }
    ],
     items4: [],
    items5: [
      { text: "โครงการ/หลักสูตร", icon: "mdi-clock" },
      { text: "ประวัติรายบุคคล", icon: "mdi-account" },
      { text: "รายงานสรุป", icon: "mdi-flag" },
      { text: "รายงานดึงกลับเข้าปฎิบัติราชการจากการลาอบรม/ลาศึกษา", icon: "mdi-flag" },
      { text: "อบรมออนไลน์", icon: "mdi-flag" }
    ],
    
   
    items6: [
      { text: "หนังสือรับรอง", icon: "mdi-clock" },
      { text: "ข้อมูลสุขภาพ", icon: "mdi-account" },
      { text: "ที่จอดรถ", icon: "mdi-flag" }
    ]
  })
};
</script>

<style>
</style>