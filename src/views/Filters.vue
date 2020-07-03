<template>
  <div id="Filters">
    <h2>{{ 1234 | currency("THB") }}</h2>
    <h2>{{ 200000000000 | bytes }}</h2>
    <h2>{{ "wisdomworld" | capitalize({ onlyFirstLetter: true }) }}</h2>
    <h2>{{ "wisdomworld" | uppercase }}</h2>

    <h2>{{ [1, 2, 3] | reverseArray }}</h2>
    <!-- // สร้างขึ้นมาเอง -->
  </div>
</template>

<script>
export default {
  name: "Filters",
  filters: {
    reverseArray(value) {
      return value.slice().reverse();
    }
  }
};
</script>

<style></style>
