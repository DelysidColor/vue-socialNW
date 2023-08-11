import Vue from "vue";
import Vuex from "vuex";
import Users from "../../users.json";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		Users,
		user: {},
		isLogined: false,
	},
	getters: {
		Users: (state) => {
			return state.Users;
		},
		getUser: (state) => {
			if (state.user !== null) {
				state.user = JSON.parse(localStorage.getItem("user"));
			}

			return state.user;
		},
		isLogined: (state) => {
			state.isLogined = JSON.parse(localStorage.getItem("isLogined"));
			return state.isLogined;
		},
	},
	mutations: {
		setUser: (state, user) => {
			state.user = user;
			state.isLogined = true;
			localStorage.setItem("user", JSON.stringify(user));
			localStorage.setItem("isLogined", JSON.stringify(true));
		},
		delUser: (state, user) => {
			state.user = {};
			state.isLogined = false;
			localStorage.removeItem("user");
			localStorage.removeItem("isLogined");
		},
	},
	actions: {},
	modules: {},
});
