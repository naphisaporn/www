<template>
  <div id="Home2">

     <!-- interpolation -->
    <h1>{{ title }}</h1>
    <h2>{{ count }}</h2>
    <button @click="onClickAdd">add</button>
    <!-- MVM -->
    <input v-model="message" type="text" placeholder="Enter your message">
    <div>{{message}}</div>
    <button @click="message=''">Reset</button>
  </div>
</template>

<script>
export default {
    name:"Home2",
    data() {
    return {
      title: "wisdomworld www.wisdomworld.com",
      count: 0,
      message: ""
    };
  },
  methods: {
    onClickAdd() {
      this.count = this.count + 1;
    }
  }
};
</script>

<style></style>
