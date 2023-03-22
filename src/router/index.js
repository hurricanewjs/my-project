import Home from "@/components/testMixins/index.vue"
import HelloWorld from '@/components/HelloWorld.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import testInput from '@/components/testInput.vue'
import testI18n from '@/components/testI18n.vue'
import vCamara from '@/components/camara.vue'
import testMixins from '@/components/testMixins/index.vue'
import test1 from "@/components/testMainshi/test1.vue"
import test2 from "@/components/testMainshi/test2.vue"
import baidu from "@/components/baidu.vue"
// const Home = { template: '<div>Home</div>' }
Vue.use(VueRouter)
const routes = [
  { path: '/', component: baidu },
  { path: '/Home', component: Home },
  { path: '/HelloWorld', component: HelloWorld },
  { path: '/testInput', component: testInput },
  { path: '/testI18n', component: testI18n },
  { path: '/vCamara', component: vCamara },
  { path: '/testMixins', component: testMixins },
  { path: '/test1', component: test1 },
  { path: '/test2', component: test2 },
]
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL, 
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  // history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
export default router