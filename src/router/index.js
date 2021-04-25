import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
 // EC - Extra Cinema
import ECHome from "@/views/cinema/Home";
import ECForHalls from "@/views/cinema/ForHalls";
import ECUploadDocs from "@/views/cinema/UploadDocs";
import ECOrderEquipment from "@/views/cinema/OrderEquipment";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cinema",
    name: "ec-home", //extra cinema home-page
    component: ECHome,
  },
  {
    path: "/cinema/for-halls",
    name: "for-halls", //extra cinema for-hall-page
    component: ECForHalls,
  },
  {
    path: "/cinema/for-halls/upload-docs",
    name: "upload-docs", //extra cinema for-hall-upload-docs-page
    component: ECUploadDocs,
  },
  {
    path: "/cinema/for-halls/order-equipment",
    name: "order-equipment",
    component: ECOrderEquipment
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
