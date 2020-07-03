<template>
  <div id="Lifecycle">
    <h1>Lifecycle Hooks</h1>
    <span>{{ counter }}</span>
    <br />
    <button @click="add">Change</button>
  </div>
</template>

<script>
export default {
  name: "Lifecycle",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    add() {
      this.counter++;
    }
  },
  beforeCreate() {
    console.log("beforecreated");
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeupdate");
  },
  updated() {
    console.log("update");
  },
  beforeDestroy() {
    console.log("beforedestroy");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style></style>
