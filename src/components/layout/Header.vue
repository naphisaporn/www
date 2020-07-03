<template>
  <div id="header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://sn3302files.storage.live.com/y4mbc_-sRHnlaUhZdm_ja-Eu8qRP_gRamM_MUKEfbciNJIRmd9dF5SwsigOVlg2vGbLK9BnHU0gHPFPvT1yFYQxhAdcmf0HcKbacMmr5rsSMC8mhpHaBoWfdMUrgwUWOYreFtwECYb4tHUI5_-90a0gfpxJwbgyKOkvANuaC8yKN_G12Qb4oC_vPwjLEhKoq4W-aCUD14biXYKftzDQrwgyHg/WISDOM%20WORLD%20MEDICALv2.jpg?psid=1&width=580&height=258"
            width="112"
            height="28"
          />
          <li><router-link class="navbar-item" to="/">Home</router-link></li>
          <li>
            <router-link class="navbar-item" to="Home2">Home2</router-link>
          </li>
          <li>
            <router-link class="navbar-item" to="Product">Product</router-link>
          </li>
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start"></div>
      </div>
    </nav>

    <!-- <ul>

      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="Home2">Home2</router-link></li>
      <li><router-link to="Event">Event</router-link></li>
      <li><router-link to="Data">Data</router-link></li>
      <li><router-link to="Compute">Compute</router-link></li>
      <li><router-link to="Blinding">Blinding</router-link></li>
      <li><router-link to="Form">From</router-link></li>
      <li><router-link to="Slot">Slot</router-link></li>
      <li><router-link to="Condition">Condition</router-link></li>
      <li><router-link to="Loop">Loop</router-link></li>
      <li><router-link to="Lifecycle">Lifecycle</router-link></li>
      <li><router-link to="Variable">Variable</router-link></li>
      <li><router-link to="Ref">Ref</router-link></li>
      <li><router-link to="Filters">Filters</router-link></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "header"
};
</script>

<style scope>
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  margin-right: 10px;
  margin-left: 10px;
  
}
</style>
<style>
#header {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* background-color: #f6f4e8; */
}
</style>
