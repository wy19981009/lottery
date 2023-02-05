import { createRouter, createWebHashHistory } from "vue-router";
import Tabbar from "../views/TabbarView.vue";
import HomeView from "../views/HomeView.vue";
import DrawPrize from "../views/DrawPrizeView.vue";
import Mine from "../views/MineView.vue";
import Lotto from "../views/LottoView.vue";

const routes = [
	{
		path: "/",
		component: Tabbar,
		children: [
			{
				path: "/home",
				name: "home",
				component: HomeView,
			},
			{
				path: "/draw",
				name: "drawPrize",
				component: DrawPrize,
			},
			{
				path: "/mine",
				name: "mine",
				component: Mine,
			},
		],
	},

	{
		path: "/lotto",
		name: "lotto",
		component: Lotto,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
