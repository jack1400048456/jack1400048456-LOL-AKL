import Vue from 'vue'
import Router from 'vue-router'
import CategoryEdit from './views/CategoryEdit.vue'
import CategoryList from './views/CategoryList.vue'
import Main from './views/Main.vue'

import ItemsEdit from './views/ItemsEdit.vue'
import ItemsList from './views/ItemsList.vue'
import HeroEdit from './views/HeroEdit.vue'
import HeroList from './views/HeroList.vue'
import ArticleEdit from './views/ArticleEdit.vue'
import ArticleList from './views/ArticleList.vue'



Vue.use(Router)

export default new Router({
  // mode:history,
  props: {
    id: {}
  },
  routes: [{
    path: '/',
    name: 'main',
    component: Main,
    children: [{
      path: '/categories/create',
      component: CategoryEdit
    }, {
      path: '/categories/list',
      component: CategoryList
    }, {
      path: '/categories/edit/:id',
      component: CategoryEdit,
      props: true
    }, {
      path: '/items/create',
      component: ItemsEdit
    }, {
      path: '/items/list',
      component: ItemsList
    }, {
      path: '/items/edit/:id',
      component: ItemsEdit,
      props: true
    }, {
      path: '/heroes/create',
      component: HeroEdit
    }, {
      path: '/heroes/list',
      component: HeroList
    }, {
      path: '/heroes/edit/:id',
      component: HeroEdit,
      props: true
    }, {
      path: '/articles/create',
      component: ArticleEdit
    }, {
      path: '/articles/list',
      component: ArticleList
    }, {
      path: '/articles/edit/:id',
      component: ArticleEdit,
      props: true
    }]
  }, ]
})