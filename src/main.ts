import { createApp } from "vue";
import "./assets/reset.css";
import "./assets/main.css";
import App from "./App.vue";
import router from "./routes/router.ts";

createApp(App).use(router).mount("#app");
