<template>
  <div id="ProductCategory">

    <v-container class="elevation-10" >
      <v-container class="bg">
        <v-card  flat tile>
          <v-toolbar 
          color="teal lighten-3" 
          height="50">

            <v-toolbar-title>Product</v-toolbar-title>
          </v-toolbar>
        </v-card>
      </v-container>
      <v-container fluid>
        <v-row class="justify-center">
                  <span class="text-h2 ">Category</span>

        </v-row>

        <v-row>
          <v-col cols="4" v-for="item in items" :key="item.id" class="mt-5">
            <v-card outlined class="mx-auto" color="#BACEC1" dark>
              <v-img class="white--text align-end" height="auto" :src="item.src">
                <v-card-title style="color:Black">{{ item.title }}</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">{{ item.subtitle }}</v-card-subtitle>

            

              <v-card-actions>
                <div class="justify-end">
                  <v-btn color="#1D3124" router :to="item.route">More</v-btn>
                </div>

               
              </v-card-actions>
            </v-card>
          </v-col>

        
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ProductCategory",
  data: () => ({
    items: [
      {
        id: 1,
        src: require("../assets/Product/B-50.jpg"),
        title: "Vitamin B 50",
        // subtitle:
        //   "Even with high levels of B-vitamins in our multivitamins, some patients may require even higher levels of B-50. The solution is to add our B-50 Complex Capsule. Our small, easy-to-swallow capsule will make it easy to be compliant with your B-vitamin needs.",
        route: "/B50"
      },
      {
        id: 2,
        src: require("../assets/Product/Calcium.jpg"),
       title: "Calcium",
        // subtitle:
        //   "Iron deficiencies are one of the most common side effects of bariatric surgery. To ensure your health, we developed an iron that is easy on the stomach and easy for your body to absorb. Our Non-Chewable iron is available in 30 mg tablet or 45 mg and 60 mg capsules.",
        route: "/Iron"
      },
      {
        id: 3,
        src: require("../assets/Product/Iron.jpg"),
        title: "Iron + C",
        // subtitle:
        //   "If you don’t care about flavor and just want to get your calcium and get on with your day, our Calcium Citrate PLUS Tablet is for you. It’s specially formulated to break down quickly and contains a complete bone health formulation that delivers 1,200 mg of calcium citrate and 1,200 IU of vitamin D3. These tablets are small and easy-to-swallow, and patients can easily break them in half if concerned with size. ",
        route: "/Calcium"
      },
      {
        id: 4,
        src: require("../assets/Product/Protein_Berry.jpg"),
        title: "Protein",
        // subtitle:
        //   "Celebrate® Rebuild Protein + was created to support a healthy gut microbiome while keeping your body in muscle protein balance. ",
        route: "/Calcium"
      },
      {
        id: 5,
        src: require("../assets/Product/ReFresh_Sleep.jpg"),
        title: "Other",
        route: "/Calcium"
      },
     
    ],
    // products: [
    //   {
    //     text: "Dashboard",
    //     disabled: false,
    //     href: "breadcrumbs_dashboard"
    //   },
    //   {
    //     text: "Link 1",
    //     disabled: false,
    //     href: "breadcrumbs_link_1"
    //   },
    //   {
    //     text: "Link 2",
    //     disabled: true,
    //     href: "breadcrumbs_link_2"
    //   }
    // ],
    // activeTab: '/user/${this.id}',
    //   tabs: [
    //     { id: 1, name: "Task", route: '/' },
    //     { id: 2, name: "Project", route: '/Product' }
    //   ]
  })
};
</script>

<style>
</style>