import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Users from "../users.json";

Vue.config.productionTip = false;

export default {
	data() {
		return {
			Users,
		};
	},
};
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
