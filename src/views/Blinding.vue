<template>
  <div id="Blinding">
    <img v-bind:src="imageurl" v-bind:height="height" />
    <br />
    <a :href="link">My Website</a>
    <div :class="[false ? error : '', important]">Code</div>
    <div :style="{color, fontSize}">Binding Style</div>
    <div :style="isActive ? styleObj : ''">Binding Style obj</div>
    <button @click="isActive = !isActive">ToggleActive</button>
  </div>
</template>

<script>
export default {
  name: "Blinding",
  data() {
    return {
      imageurl:
        "https://i.pinimg.com/originals/d1/62/c1/d162c1f07e2053e00f7f7b220de90dea.png",
      height: 200,
      link: "http://google.com",
      error: "error_class",
      important: "important",
      color: "green",
      fontSize: "30px",
      styleObj: {
          backgroundColor: 'yellow',
          color: 'green'
      },
      isActive:false
    };
  }
};
</script>

<style>

.error_class {
  background-color: coral;
  color: aquamarine;
}

.important {
  font-weight: 900;
}
</style>
