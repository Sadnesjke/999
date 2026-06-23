import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PeoplePage from '../views/PeoplePage.vue'
import BookingPage from '../views/BookingPage.vue'
import NewEventPage from '../views/NewEventPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/people', component: PeoplePage },
    { path: '/booking', component: BookingPage },
    { path: '/new-event', component: NewEventPage }
  ]
})

export default router