<template>
  <div id="B50">
    <v-card>
      <v-toolbar color="cyan" dark flat>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>B-50</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-text-field
          append-icon="mic"
          class="mx-4"
          flat
          hide-details
          label="Search"
          prepend-inner-icon="search"
          solo-inverted
        ></v-text-field>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs v-model="tabs" centered>
            <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense shaped>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item v-for="list in lists" :key="list" route :to="list.route">
              <v-list-item-title>{{list.title}}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-tabs-items v-model="tabs" v-for="item in items" :key="item">
        <v-tab-item>
          <v-card flat v-for="card in cards" :key="card.id" class="elevation-10">
            <v-row>
              <v-col cols="4">
                <v-avatar class="elevation-2 ml-5" size="500" tile >
                  <v-carousel hide-delimiters cycle>
                    <v-carousel-item
                      v-for="(imgproduct,i) in imgproducts"
                      :key="i"
                      :src="imgproduct.src"
                      reverse-transition="fade-transition"
                      transition="fade-transition"
                    >
                      <v-row class="fill-height title" align="center" justify="center">
                        <div>{{ imgproduct.title }}</div>
                      </v-row>
                    </v-carousel-item>
                  </v-carousel>
                  <!-- <v-img :src="card.src" contain height="500" width="500" /> -->
                </v-avatar>
              </v-col>
              <v-col class="ml-15 text-h3" cols="6">
                <div>{{card.title}}</div>
                <hr />
                <v-col class="ml-10 mt-5 text-h6 font-weight-light">
                  <div>{{card.datail}}</div>
                </v-col>

                <v-col class="mt-5 text-subtitle-1">
                  <div>{{card.text}}</div>
                </v-col>
              </v-col>
            </v-row>

            <!-- <ul v-for="(element, index) in element" :key="index" class="list">
              <li class="list-element">{{element}}  </li>
            </ul>-->
            <v-row>
              <v-col cols="6">
                <v-card color="blue lighten-5" class="ml-15">
                  <div class="text-h5 ml-15 text-decoration-underline">Key Elements:</div>
                  <v-list-item v-for="element in elements" :key="element">
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-icon size="15" class="mr-5">radio_button_unchecked</v-icon>
                        {{element}}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card color="blue lighten-5" class="mr-15">
                  <div
                    class="text-h5 ml-2 text-decoration-underline"
                  >Key Things to Look for in Our Sleep + Magnesium Capsule:</div>
                  <v-list-item v-for="subtop in subtops" :key="subtop">
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-icon size="15" class="mr-5">radio_button_unchecked</v-icon>
                        {{subtop}}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title class="headline">An awesome title</v-card-title>
            <v-card-text>
              <p>Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.</p>

              <p>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.</p>

              <p
                class="mb-0"
              >Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.</p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title class="headline">An even better title</v-card-title>
            <v-card-text>
              <p>Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.</p>

              <p
                class="mb-0"
              >Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.</p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "B50",
  data: () => ({
    drawer: false,
    group: null,
    watch: {
      group() {
        this.drawer = false;
      }
    },
    tabs: null,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    items: [
      "B-50"
      // 'shopping', 'videos', 'images', 'news',
    ],
    cards: [
      {
        id: 1,
        src: require("/Users/pewpew/Desktop/my_vue_workshops/wisdomworld/src/assets/Product/B-50.jpg"),
        text: "Daily Dosage = 2 Capsules",
        title: "B-50",
        datail:
          "ReFresh sleep aid contains magnesium bisglycinate chelate, melatonin, valerian root extract, and hops flower extract. Magnesium bisglycinate is highly bioavailable that offers the benefits of improved cognitive health, relieves inflammation, improves gut health, and acts as a natural sleep aid. Magnesium bisglycinate is also the preferred form of magnesium to help address a deficiency. By using the chelated form of magnesium, this mineral will have enhanced absorption in our sleep aid."
      }
    ],
    elements: [
      "100 mg magnesium bisglycinate chelate",
      "5 mg melatonin",
      "100 mg hops flower extract",
      "200 mg valerian root extract"
    ],
    tops: [
      "Key Elements: ",
      "Key Things to Look for in Our Sleep + Magnesium Capsule: "
    ],
    subtops: [
      "Chelated Minerals",
      "Small capsule",
      "Magnesium bisglycinate chelate ",
      "Melatonin",
      "Valerian root extract ",
      "Hops flower extract "
    ],
    details: [
      "Chelation simply means “attaching to”. By chelating our mineral forms to an amino acid (the building blocks of protein), we have increased the likelihood that these minerals will be absorbed in a low acidic environment.",
      "with our small, easy to swallow capsule, it will be easier than ever to take your sleep aid.",
      "Magnesium bisglycinate is the most absorbable form available. Magnesium aids in glucose metabolism. Low levels of magnesium (hypomagnesemia) can worsen insulin resistance. Magnesium plays a role in bone formation and affects parathyroid hormone and vitamin D levels. Low magnesium levels can also play a role in migraine and headache formation. Magnesium also works within the body to lower inflammatory markers.",
      "Poor sleep can deplete your energy and lower your productivity. Melatonin is a hormone that let’s your body know when it is time to rest. If our bodies do not produce enough of this hormone, falling asleep at night may be challenging. Melatonin relaxes the body, making it easy to glide into sleep without causing difficulty with waking up or missing the alarm. Each ReFresh capsule contains 2.5mg of melatonin to help calm the body into a comfortable evening of sleep.",
      "Taking valerian root in the evening may help you fall asleep faster and improve your quality of sleep. Some research supports that valerian root helps to ease and lessen anxiety and hyperactivity.",
      " Hops have a natural sedative effect which can help improve sleep. Hops also aids in inducing sleep by lowering the body temperature, which creates a drowsy state and helps with the sleep process."
    ],
    imgproducts: [
      {
        src: require("/Users/pewpew/Desktop/my_vue_workshops/wisdomworld/src/assets/Product/B-50.jpg")
        // title: "Wisdomworld"
      },
      {
        src: require("/Users/pewpew/Desktop/my_vue_workshops/wisdomworld/src/assets/Product/b-50-ref.jpg"),
        title: "Wisdomworld"
      }
    ],
    lists: [
      {
        title: "B-50",
        route: "/B50"
      },
      {
        title: "Iron",
        // route: "/"
      },
      {
        title: "Calcium",
        // route: "/"
      },
      {
        title: "Protein",
        // route: "/"
      },
      {
        title: "Other",
        // route: "/"
      }

    ]
  })
};
</script>

<style>
</style>