<template>
  <div id="Slot">
    <Clock>
      <span style="color:red;">เวลาปัจจุบัน</span>
    </Clock>

    <Clock>
      <span style="color:green;">time</span>
    </Clock>
    <!-- Using fallback content -->
    <Clock />

    <Clock>
      <span style="color:orange;"> เวลาปัจจุบัน</span>
      <template v-slot:header>
        <h1>Header</h1>
      </template>
      <template v-slot:footer>
        <div>
          Footer
        </div>
      </template>
    </Clock>
  </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue";
export default {
  name: "Slot",
  components: {
    Clock
  }
};
</script>

<style></style>
