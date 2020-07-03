import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Home2 from "../views/Home2.vue";
import Event from "../views/EventMethod.vue";
import Data from "../views/Data.vue";
import Compute from "../views/Compute.vue";
import Blinding from "../views/Blinding.vue";
import Form from "../views/Form.vue";
import Slot from "../views/Slot.vue";
import Condition from "../views/Condition.vue";
import Loop from "../views/Loop.vue";
import Lifecycle from "../views/LifeCycle.vue";
import Variable from "../views/Variable and State.vue";
import Ref from "../views/Ref.vue";
import Filters from "../views/Filters.vue";
import Product from "../views/Product.vue";
import Vuetify from "vuetify";

Vue.use(VueRouter);
Vue.use(Vuetify);


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Home2",
    name: "Home2",
    component: Home2
  },
  {
    path: "/Event",
    name: "Event",
    component: Event
  },
  {
    path: "/Data",
    name: "Data",
    component: Data
  },
  {
    path: "/Compute",
    name: "Compute",
    component: Compute
  },
  {
    path: "/Blinding",
    name: "Blinding",
    component: Blinding
  },
  {
    path: "/Form",
    name: "Form",
    component: Form
  },
  {
    path: "/Slot",
    name: "Slot",
    component: Slot
  },
  {
    path: "/Condition",
    name: "Condition",
    component: Condition
  },
  {
    path: "/Loop",
    name: "Loop",
    component: Loop
  },
  {
    path: "/Lifecycle",
    name: "Lifecycle",
    component: Lifecycle
  },
  {
    path: "/Variable",
    name: "Variable",
    component: Variable
  },
  {
    path: "/Ref",
    name: "Ref",
    component: Ref
  },
  {
    path: "/Filters",
    name: "Filters",
    component: Filters
  },
  {
    path: "/Product",
    name: "Product",
    component: Product
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
