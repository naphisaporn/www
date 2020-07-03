<template>
  <div id="content" >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "content"
};
</script>

<style scoped>
.content-wrapper {
  margin: 24px;
  padding: 24px;
  border-width: 1px;
  border-color: gray;
  border-style: dashed;
}

</style>
<style>
#content {
    background-color: #f6f4e8;
    background-size: contain;
    /* class="content-wrapper */
}

</style>
