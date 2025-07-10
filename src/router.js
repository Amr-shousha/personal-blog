import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import Blog from "./components/Blog.vue";
import Article from "./components/Article.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Author from "./components/Author.vue";
import Byauthor from "./components/ByAuthor.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/blog", name: "Blog", component: Blog },
  { path: "/about", name: "About", component: About },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/article/:id", name: "Article", component: Article },
  { path: "/author", name: "Author", component: Author },
  { path: "/byauthor/:author", name: "Byauthor", component: Byauthor },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
