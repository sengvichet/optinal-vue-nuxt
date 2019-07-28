import Vue from 'vue'
import Router from 'vue-router'

const _09432b5a = () => import('..\\pages\\you-build\\index.vue' /* webpackChunkName: "pages_you-build_index" */).then(m => m.default || m)
const _24c5978e = () => import('..\\pages\\web-hosting\\index.vue' /* webpackChunkName: "pages_web-hosting_index" */).then(m => m.default || m)
const _021a89fb = () => import('..\\pages\\reseller-hosting\\index.vue' /* webpackChunkName: "pages_reseller-hosting_index" */).then(m => m.default || m)
const _ecfe01aa = () => import('..\\pages\\we-build\\index.vue' /* webpackChunkName: "pages_we-build_index" */).then(m => m.default || m)
const _107df156 = () => import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages_products_index" */).then(m => m.default || m)
const _c923e82a = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */).then(m => m.default || m)
const _60b3d8e7 = () => import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages_posts_index" */).then(m => m.default || m)
const _b036a416 = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */).then(m => m.default || m)
const _a73f17a6 = () => import('..\\pages\\admin\\dashboard.vue' /* webpackChunkName: "pages_admin_dashboard" */).then(m => m.default || m)
const _24e9ed19 = () => import('..\\pages\\admin\\post\\new.vue' /* webpackChunkName: "pages_admin_post_new" */).then(m => m.default || m)
const _11341833 = () => import('..\\pages\\admin\\post\\_id.vue' /* webpackChunkName: "pages_admin_post__id" */).then(m => m.default || m)
const _0560e90f = () => import('..\\pages\\posts\\_id.vue' /* webpackChunkName: "pages_posts__id" */).then(m => m.default || m)
const _6864513e = () => import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages_products__id" */).then(m => m.default || m)
const _70c6ee8c = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/you-build",
			component: _09432b5a,
			name: "you-build"
		},
		{
			path: "/web-hosting",
			component: _24c5978e,
			name: "web-hosting"
		},
		{
			path: "/reseller-hosting",
			component: _021a89fb,
			name: "reseller-hosting"
		},
		{
			path: "/we-build",
			component: _ecfe01aa,
			name: "we-build"
		},
		{
			path: "/products",
			component: _107df156,
			name: "products"
		},
		{
			path: "/admin",
			component: _c923e82a,
			name: "admin"
		},
		{
			path: "/posts",
			component: _60b3d8e7,
			name: "posts"
		},
		{
			path: "/about",
			component: _b036a416,
			name: "about"
		},
		{
			path: "/admin/dashboard",
			component: _a73f17a6,
			name: "admin-dashboard"
		},
		{
			path: "/admin/post/new",
			component: _24e9ed19,
			name: "admin-post-new"
		},
		{
			path: "/admin/post/:id?",
			component: _11341833,
			name: "admin-post-id"
		},
		{
			path: "/posts/:id",
			component: _0560e90f,
			name: "posts-id"
		},
		{
			path: "/products/:id",
			component: _6864513e,
			name: "products-id"
		},
		{
			path: "/",
			component: _70c6ee8c,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
