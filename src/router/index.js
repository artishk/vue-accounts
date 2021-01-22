import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddNew from "../views/addNewAccount.vue";
import editAccount from "../views/editAccount.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/addNewAccount",
    name: "AddNew",
    component: AddNew,
  },
  {
    path: "/editAccount/:id",
    name: "editAccount",
    component: editAccount,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
