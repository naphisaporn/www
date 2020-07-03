<template>
  <div app="Event">
      <h1>Event and Method</h1>
    <button v-on:click="clickMe">clickMe</button>
    <button v-on:click="clickMe2('Welcome to vuejs')">clickMe2</button>
    <button @click="clickMe3('Welcome to Wisdomworld')">clickMe3</button>
    <h3>{{getTimestamp()}}</h3>
  </div>
</template>

<script>
export default {
    name: "Event",
    mounted() {
        this.innitial()
    },
    methods: {
        innitial(){
            console.log("Initialization")

        },
        clickMe(){
            alert("Hi")
        },
        clickMe2(message){
            alert(message)
        },
        clickMe3(message){
            alert(message)
        },
        getTimestamp(){
            return Date()
        }
    },

}
</script>

<style>

</style>