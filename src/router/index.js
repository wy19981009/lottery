import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DrawPrize from "../views/DrawPrizeView.vue";
import Mine from "../views/MineView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/drawPrize",
		name: "drawPrize",
		component: DrawPrize,
	},
	{
		path: "/mine",
		name: "mine",
		component: Mine,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
