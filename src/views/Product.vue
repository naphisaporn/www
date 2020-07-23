<template>
  <v-container>
    <div id="Product">
        <br>
        <br>
        <h2>Product</h2>
        <h3>---------------------------------</h3>
       <v-row>
        <v-col cols="4" v-for="item in items" :key="item.id">
          <v-card outlined class="mx-auto" color="#BACEC1"
            dark>
            <v-img
              class="white--text align-end"
              height="auto"
              :src="item.src"
            >
              <v-card-title style="color:Black">{{ item.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0" >{{ item.subtitle }}</v-card-subtitle>

          

            <v-card-actions>
              <div style="padding-inline-start: 275px;">
                 <v-btn color="#1D3124" 
                 router
                 :to="item.route"  >
                More
              </v-btn>
              </div>
               
             
            </v-card-actions>
          </v-card>
        </v-col>

       
        <v-row class=" justify-end">
          
            <v-btn class="mr-5 elevation-7" color="#FFDAB9" to= "/ProductCategory">See more</v-btn>
        
        </v-row>
                  

      </v-row>
     
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/Product/B-50.jpg"),
          title: "Vitamin B 50 Complex Capsule",
          subtitle: "Even with high levels of B-vitamins in our multivitamins, some patients may require even higher levels of B-50. The solution is to add our B-50 Complex Capsule. Our small, easy-to-swallow capsule will make it easy to be compliant with your B-vitamin needs.",
          route: "/B50"
        },
        {
          id: 2,
          src: require("../assets/Product/Calcium.jpg"),
           title: "Iron + C Capsules & Tablets",
          subtitle: "Iron deficiencies are one of the most common side effects of bariatric surgery. To ensure your health, we developed an iron that is easy on the stomach and easy for your body to absorb. Our Non-Chewable iron is available in 30 mg tablet or 45 mg and 60 mg capsules.",
          route: "/Iron"
        },
        {
          id: 3,
          src: require("../assets/Product/Iron.jpg"),
          title: "Calcium PLUS",
          subtitle: "If you don’t care about flavor and just want to get your calcium and get on with your day, our Calcium Citrate PLUS Tablet is for you. It’s specially formulated to break down quickly and contains a complete bone health formulation that delivers 1,200 mg of calcium citrate and 1,200 IU of vitamin D3. These tablets are small and easy-to-swallow, and patients can easily break them in half if concerned with size. ",
          route: "/Calcium"
        },
      ]
    }
  },
};
</script>

<style>
h2 {
    text-align: center;
    font-size: 40px;
}
h3 {
    text-align: center;
}

</style>
