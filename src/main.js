import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

import "@/assets/css/main.css";
import "@/assets/css/tailwind/tailwind.css";
import store from "@/store";

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
