import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _376dfb4d = () => interopDefault(import('..\\pages\\second.vue' /* webpackChunkName: "pages_second" */))
const _968afbc4 = () => interopDefault(import('..\\pages\\third.vue' /* webpackChunkName: "pages_third" */))
const _b1070fee = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/second",
    component: _376dfb4d,
    name: "second"
  }, {
    path: "/third",
    component: _968afbc4,
    name: "third"
  }, {
    path: "/",
    component: _b1070fee,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
