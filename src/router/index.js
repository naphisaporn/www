import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Blog from "../views/Blog.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import B50 from "../views/Products/B-50.vue";
import Iron from "../views/Products/Iron.vue";
import Calcium from "../views/Products/Calcium.vue";
import Customer from "../views/Products/Customer.vue";
import Product2 from "../views/Product2.vue";
import ProductCategory from "../views/Product_Category.vue";
import Blog_detail from "../views/Blog_detail.vue";

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
    path: "/Blog_detail",
    name: "Blog_detail",
    component: Blog_detail

  },
  {
    path: "/ProductCategory",
    name: "ProductCategory",
    component: ProductCategory
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  
 
  {
    path: "/Product",
    name: "Product",
    component: Product
  },
  {
    path: "/Blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/B50",
    name: "B50",
    component: B50
  },
  {
    path: "/Iron",
    name: "Iron",
    component: Iron
  },
  {
    path: "/Calcium",
    name: "Calcium",
    component: Calcium
  },
  {
    path: "/Customer",
    name: "Customer",
    component: Customer
  },
  {
    path: "/Product2",
    name: "Product2",
    component: Product2
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
