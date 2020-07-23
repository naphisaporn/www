<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card class="pl-10">
            <v-row class="d-flex align-center flex-row">
              <v-col cols="3">
                <img
                  src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                  height="200"
                  width="200"
                />
              </v-col>

              <v-col>
                <v-container>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field name="id" label="เลขที่" id="id" outlined rounded dense></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="เลขที่ตำแหน่ง" id="id" outlined rounded dense></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field
                        name="id"
                        label="เลขที่ตำแหน่งก.พ.(พ.ก.ส.)"
                        id="id"
                        outlined
                        rounded
                        dense
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="ตำแหน่ง" id="id" outlined rounded dense></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field
                        name="id"
                        label="ตำแหน่งภาษาอังกฤษ"
                        id="id"
                        outlined
                        rounded
                        dense
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="ชื่อ" id="id" outlined rounded dense></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="สกุล" id="id" outlined rounded dense></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="ตำแหน่ง" id="id" outlined rounded dense></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="กลุ่ม P4P;" id="id" outlined rounded dense></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-select
                        :items="items"
                        v-model="value"
                        label="ผู้บังคับบัญชา"
                        outlined
                        rounded
                        dense
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>

            <hr />

            <v-container fluid>
              <v-row>
                <v-col cols="3">
                  <v-text-field name="id" label="คำนำหน้า" id="id" outlined></v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-text-field name="id" label="ชื่อ" id="id" outlined></v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-text-field name="id" label="นามสกุล" id="id" outlined></v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-text-field name="id" label="ชื่อเล่น" id="id" outlined></v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-text-field name="id" label="คำนำหน้าภาษาอังกฤษ" id="id" outlined></v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-text-field name="id" label="ชื่อภาษาอังกฤษ" id="id" outlined></v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-text-field name="id" label="นามสกุลภาษาอังกฤษ" id="id" outlined></v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-text-field name="id" label="ชื่อเล่นภาษาอังกฤษ" id="id" outlined></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <hr />

            <v-row>
              <v-col cols="4">
                <v-container fluid class="elevation-5">
                  <v-row>
                    <v-col cols="6">
                      <v-text-field name="id" label="ชื่อเดิม" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="นามสกุลเดิม" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="หมูโลหิต" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="เพศ" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="ศาสนา" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="จำนวนบุตร/ธิดา" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="สถานะภาพ" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="วันเกิด" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="อายุ" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-select :items="jobs" v-model="value" label="กลุ่มงานย่อย" outlined></v-select>
                    </v-col>

                    <v-col cols="6">
                      <v-select :items="level" v-model="value" label="ระดับการบริหาร" outlined></v-select>
                    </v-col>

                    <v-col cols="6">
                      <v-select
                        :items="nPosition"
                        v-model="value"
                        label="ชื่อตำแหน่งบริหาร"
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="6">
                      <v-select
                        :items="nEPosition"
                        v-model="value"
                        label="ชื่อตำแหน่งบริหารภาษาอังกฤษ"
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="6">
                      <v-select
                        :items="levelPosition"
                        v-model="value"
                        label="ระดับตำแหน่ง"
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="ช่วงระดับของตำแหน่งตามก.พ." id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-select :items="oldLevel" v-model="value" label="ระดับตำแหน่งเดิม" outlined></v-select>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="วันที่เข้าทำงานร.พ.ราชวิถี" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="วันที่บรรจุกลับ" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field
                        name="id"
                        label="วันที่เข้าสู่ตำแหน่ง/ระดับปัจจุบัน"
                        id="id"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="วันที่เปลี่ยนแปลง" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="วันที่ช่วยราชการ" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="วันที่เกษียณ" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="วันที่ออกจากร.พ.ราชวิถี" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="เลขที่สัญญา" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="วันที่เริ่ม" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="วันที่สิ้นสุด" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="H/N" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        name="id"
                        label="วันที่เริ่มปฏิบัติราชการต่อเนื่อง(ขรก.เท่านั้น)"
                        id="id"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field name="id" label="หมายเหตุ" id="id" outlined></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>

              <v-col cols="4">
                <v-container fluid class="elevation-5">
                  <v-row>
                    <v-col cols="12">
                      <v-btn block disabled color="success" outlined>สังกัดจริง</v-btn>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="กลุ่มภารกิจ" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="กลุ่มงาน" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="งาน" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="หน่วยงาน" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-btn block disabled color="success" outlined>สังกัดถือจ่าย</v-btn>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="กอง" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="ฝ่าย" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="งาน" id="id" outlined></v-text-field>
                    </v-col>

                    <v-container>
                      <v-row>
                        <v-col cols="6">
                          <v-text-field name="id" label="อัตราเงินเดือน" id="id" outlined></v-text-field>
                        </v-col>

                        <v-col cols="6">
                          <v-text-field name="id" label="ค่าตอบแทนพิเศษ(%)" id="id" outlined></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field name="id" label="ค่าตอบแทนพิเศษ" id="id" outlined></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field name="id" label="พ.ต.ส./พก.พ.ต.ส." id="id" outlined></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field
                            name="id"
                            label="เงินเพิมการครอบชีพชั่วคราว"
                            id="id"
                            outlined
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field name="id" label="เงินประจำตำแหน่ง" id="id" outlined></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field
                            name="id"
                            label="เงินตอบแทนนอกเหนือจากเงินเดือน"
                            id="id"
                            outlined
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field name="id" label="เงินไม่ทำเวชปฏิบัติ" id="id" outlined></v-text-field>
                        </v-col>

                        <v-col cols="6">
                          <v-text-field name="id" label="เงินสาขาส่งเสริมพิเศษ" id="id" outlined></v-text-field>
                        </v-col>

                        <v-col cols="6">
                          <v-text-field name="id" label="ระบุ" id="id" outlined></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field name="id" label="เงินอื่นๆ" id="id" outlined></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field name="id" label="รวมเงินได้" id="id" outlined></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-select
                            :items="groupChange"
                            v-model="value"
                            label="กลุ่มการเปลี่ยนแปลง"
                            outlined
                          ></v-select>
                        </v-col>

                        <v-col cols="12">
                          <v-select :items="change" v-model="value" label="การเปลี่ยนแปลง" outlined></v-select>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field name="id" label="ประเภทคำสั่ง" id="id" outlined></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field name="id" label="เลขที่คำสั่ง" id="id" outlined></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field name="id" label="คำสั่งลงวันที่" id="id" outlined></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-row>
                </v-container>
              </v-col>

              <v-col cols="4">
                <v-container fluid class="elevation-5">
                  <v-row>
                    <v-col cols="12">
                      <v-select
                        :items="codeTime"
                        v-model="value"
                        label="เลือกรหัสเวลาทำงาน"
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="เวลาเข้างาน" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-text-field name="id" label="เวลาเลิกงาน" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="6">
                      <v-checkbox
                        v-model="ex4"
                        label="ทำงานเป็นกะ"
                        color="pink lighten-3"
                        value="pink lighten-3"
                        hide-details
                      ></v-checkbox>
                    </v-col>

                    <v-col cols="6">
                      <v-checkbox
                        v-model="ex4"
                        label="ไปช่วยราชการ"
                        color="pink lighten-3"
                        value="pink lighten-3"
                        hide-details
                      ></v-checkbox>
                    </v-col>

                    <v-col cols="6">
                      <v-checkbox
                        v-model="ex4"
                        label="มาช่วยราชการ"
                        color="pink lighten-3"
                        value="pink lighten-3"
                        hide-details
                      ></v-checkbox>
                    </v-col>

                    <v-col cols="6">
                      <v-checkbox
                        v-model="ex4"
                        label="ไม่ทำเวชปฏิบัติ"
                        color="pink lighten-3"
                        value="pink lighten-3"
                        hide-details
                      ></v-checkbox>
                    </v-col>

                    <v-col cols="12">
                      <v-select :items="group1" v-model="value" label="กลุ่มพ.ต.ส." outlined></v-select>
                    </v-col>

                    <!-- <v-col cols="12">
                      <v-select
                        :items="codeTime"
                        v-model="value"
                        label="เลือกรหัสเวลาทำงาน"
                        outlined
                      ></v-select>
                    </v-col> -->
                    <v-container class="elevation-3 ma-5">
                      <v-col cols="12">
                        <v-btn block disabled color="success" outlined>สมาชิก</v-btn>
                      </v-col>

                      <v-col cols="6">
                        <v-checkbox
                          v-model="ex4"
                          label="กบข./กสจ."
                          color="pink lighten-3"
                          value="pink lighten-3"
                          hide-details
                        ></v-checkbox>
                      </v-col>

                      <v-col cols="6">
                        <v-checkbox
                          v-model="ex4"
                          label="สหกรณ์"
                          color="pink lighten-3"
                          value="pink lighten-3"
                          hide-details
                        ></v-checkbox>
                      </v-col>

                      <v-col cols="6">
                        <v-checkbox
                          v-model="ex4"
                          label="กองทุนฯ พ.ก.ส."
                          color="pink lighten-3"
                          value="pink lighten-3"
                          hide-details
                        ></v-checkbox>
                      </v-col>

                      <v-col cols="3">
                        <v-checkbox
                          v-model="ex4"
                          label="ฌกส."
                          color="pink lighten-3"
                          value="pink lighten-3"
                          hide-details
                        ></v-checkbox>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field placeholder="ระบุ" solo outlined></v-text-field>
                      </v-col>
                    </v-container>

                    <v-col cols="12">
                      <v-text-field name="id" label="เบอร์โทรภายใน" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field name="id" label="โทรศัพท์มือถือ" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field name="id" label="E-mail" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field name="id" label="เลขบัตรประชาชน" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field name="id" label="หนังสือเดินทาง" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field name="id" label="เลขที่ใบอนุญาตประกอบวิชาชีพ" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field name="id" label="วุฒิบัตรสาขาความเชี่ยวชาญ" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field name="id" label="ทะเบียนรถ" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field name="id" label="เลขที่จอดรถ" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field name="id" label="เบอร์โทรภายใน" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field name="id" label="ผู้บันทึกข้อมูล" id="id" outlined></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field name="id" label="วันที่บันทึกข้อมูล" id="id" outlined></v-text-field>
                    </v-col>

                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["อุมา วันดี"],

      jobs: ["-"],

      level: ["หัวหน้ากลุ่มงาน"],

      nPosition: ["หัวหน้ากลุ่มงานทรัพยากรบุคคล"],

      nEPosition: ["Head of Human Resource Department"],

      levelPosition: ["ประเภทวิชาการ-ชำนาญการพิเศษ"],

      oldLevel: ["6"]
    };
  }
};
</script>

<style>
</style>