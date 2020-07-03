<template>
  <div id="footer" class="footer">
      <span :style="{color}">{{title}}</span>

  </div>
</template>

<script>
export default {
    name: "Footer",
    mounted() {
        setInterval(()=>{
            this.$emit("onClock", Date())

        }, 100)
    },
    props: [
        "title",
        "color"
    ]




}
</script>

<style scoped>
.footer {
  font-size: 12px;
  color: gray;
  padding-top: 15px;
  text-align: center;
  /* background-color: #F6F4E8; */
  -webkit-background-size: cover;
  background-size: cover;
}
</style>