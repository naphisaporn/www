<template>
  <div id="Condition">
    <div v-if="type === 'A'">
      I'm A
    </div>
    <div v-else-if="type === 'B'">
      I'm B
    </div>
    <div v-else-if="type === 'C'">
      I'm C
    </div>
    <div v-else>
      Marvel gungka
    </div>
    <div v-if="isShow">
      Hello
    </div>
    <div v-else>
      555
    </div>
<!-- V-show จะยังโชว์โค้ดแต่แค่ไม่แสดง -->
    <div v-show="isShow">
      ring ring ring
    </div>
  </div>
</template>

<script>
export default {
  name: "Condition",
  mounted() {
      setInterval(()=> {
          this.isShow = !this.isShow;

      }, 1000)
  },
  data() {
      return {
          type: "p",
          isShow: true
      }
  },
};
</script>

<style></style>
