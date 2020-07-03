<template>
  <div class="home">
    <div id="home" class="content-wrapper">
      รูปภาพ

    </div>
    <img alt="Vue logo" src="../assets/logo.png">
      
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.content-wrapper {
  margin: auto;
  padding: 100px;
  border-width: 0px;
  border-color: gray;
  border-style: dashed;
}

</style>