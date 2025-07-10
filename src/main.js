import { createApp } from "vue";
import "./assets/style/main.scss";
import "bootstrap";
// import "./style.css";
import App from "./App.vue";
import router from "./router";
import "animate.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
