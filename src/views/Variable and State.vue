<template>
  <div id="variable">
    <div>{{ count }}</div>
    <div>{{ Math.random() }}</div>
    <div>Timestamp: {{ timestamp }}</div>
    <button @click="count++">Update count</button>

    <button @click="timestamp = Date.now()">Update timestamp</button>
  </div>
</template>

<script>
export default {
  name: "variable",
  created() {
    this.timestamp = 0;
  },
  mounted() {
    setInterval(() => {
      //this.count++;
      console.log("Timestamp: " + this.timestamp);
    }, 100);
  },
  data() {
    return {
      count: 0 //local state
    };
  }
};
</script>

<style></style>
