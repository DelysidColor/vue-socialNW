import Vue from "vue";
import VueRouter from "vue-router";
import ProfilePage from "../views/ProfilePage.vue";
import Friends from "../views/Friends.vue";
import Login from "../views/Login.vue";
import store from "../store";
import FriendProfile from "../views/FriendProfile.vue";
import ProfileEditor from "../views/ProfileEditor.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "profilepage",
		component: ProfilePage,
	},
	{
		path: "/friends/",
		name: "friends",
		component: Friends,
	},
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/friend/:id",
		name: "friendProfile",
		component: FriendProfile,
		props: (route) => ({ id: route.params.id }),
	},
	{
		path: "/profile-editor",
		name: "ProfileEditor",
		component: ProfileEditor,
	},
];

const router = new VueRouter({
	routes,
	mode: "history",
});

router.beforeEach((to, from, next) => {
	if (to.name !== "login" && !store.getters.isLogined) {
		next({ name: "login" });
	} else if (to.name === "login" && store.getters.isLogined) {
		next({ name: "profilepage" });
	} else {
		next();
	}
});

export default router;
