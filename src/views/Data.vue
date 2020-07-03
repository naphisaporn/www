<template>
  <div>
      <h1>Data</h1>
      <button @click="count++; isLogged=true;">Count++</button>
      <button @click="count--">-</button>
      <span>{{count}}</span>
      <div>{{message}}</div>
      <div>{{isLogged}}</div>
      <input type="text" placeholder="Enter a message" v-model="message">
      <h2 v-if="isLogged">Yahoo</h2>
      <div>{{account}} {{account.username}} {{account.password}}</div>
      <div>{{courses[0]}}</div>
      <ul>
          <li class="content" v-for="(item, index) in courses" :key="index">{{index}}. {{item}}</li>
      </ul>

      <span class="title">333</span>

      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "Data",
    mounted() {
        this.message = "Welcom to wisdomworld"
    },
    data() {
        return {
            count:0,
            message:"" ,
            isLogged: false,
            account: {
                username: "admin",
                password: "1234"

            },
            courses: [
                "1",
                "2",
                "3"
            ]

        }
    },

}
</script>

<style scoped>

.title{
    color: brown;
}
</style>
