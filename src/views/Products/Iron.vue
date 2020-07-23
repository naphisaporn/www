<template>
  <div id="Iron">
    <v-card>
      <v-toolbar color="pink accent-1" light flat>
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-toolbar-title>ประวัติข้าราชการ</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
        <v-tabs
          v-model="currentItem"
          fixed-tabs
          slider-color="white"
        >
          <v-tab
            v-for="link in links"
            :key="link"
             :href="link.route"
            exact
            
          >
            {{ link.title }}
          </v-tab>

          <v-menu
            v-if="more.length"
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="align-self-center mr-4"
                v-bind="attrs"
                v-on="on"
              >
                more
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>

            <v-list class="grey lighten-3">
              <v-list-item
                v-for="item in more"
                :key="item"
                @click="addItem(item)"
              >
                {{ item }}
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </template>
      </v-toolbar>
      <v-tabs-items v-model="currentItem">
      <v-tab-item
       v-for="link in links"
            :key="link"
            :value="link.route"
      >
        <v-card flat>
          <v-card-text>
            <router-view></router-view>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Iron",
  data: () => ({
    links: [
      { title: "Home", route: "/" },
      { title: "Product", route: "/Product" },
      { title: "News", route: "/Blog" },
      { title: "About us", route: "/About" },
      { title: "Contact us", route: "/Contact" }
    
    ]
  }),

    methods: {
      addItem (item) {
        const removed = this.items.splice(0, 1)
        this.items.push(
          ...this.more.splice(this.more.indexOf(item), 1)
        )
        this.more.push(...removed)
        this.$nextTick(() => { this.currentItem = 'tab-' + item })
      },
    },
};
</script>

<style>
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>