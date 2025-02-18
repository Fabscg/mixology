const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("src/components/MainLayout.vue"),
    children: [
      {
        path: "/recipes",
        component: () => import("components/RecipePage.vue"),
        name: "recipes",
      },
      {
        path: "/recipes/:id",
        component: () => import("components/RecipeDetailPage.vue"),
        name: "recipe",
      },
      {
        path: "/History",
        component: () => import("components/MyListPage.vue"),
        name: "history",
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
