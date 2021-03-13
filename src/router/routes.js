const MainLayout = () => import("layouts/MainLayout.vue");

const error404 = () => import("pages/error404.vue");
const splash = () => import("pages/splash.vue");
const about = () => import("pages/about.vue");
const contact = () => import("pages/contact.vue");
const resume = () => import("pages/resume.vue");
const works = () => import("pages/works.vue");
const detail = () => import("pages/detail.vue");

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", name: "splash", component: splash },
      { path: "about", name: "about", component: about },
      { path: "contact", name: "contact", component: contact },
      { path: "resume", name: "resume", component: resume },
      { path: "works", name: "works", component: works },
      {
        path: "detail/:URLName",
        name: "detail",
        props: true,
        component: detail
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: error404
  }
];

export default routes;
