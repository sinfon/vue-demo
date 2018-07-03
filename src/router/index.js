import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CursorDragDemo from '@/components/demo/CursorDragDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/demo/cursor-drag-demo',
      name: 'CursorDragDemo',
      component: CursorDragDemo
    }
  ]
})
