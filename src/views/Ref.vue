<template>
  <div id="Ref">
    <h1 ref="title">Waiting for chang by Ref</h1>
    <input
      ref="input1"
      type="text"
      placeholder="This will be focused automatically"
    />
  </div>
</template>

<script>
export default {
  name: "Ref",
  mounted() {
      this.$refs["title"].textContent = "Wisdomworld chang Ref";
      this.$refs["input1"].focus();
      this.$refs["input1"].value = "1234";
  },
};
</script>

<style></style>
