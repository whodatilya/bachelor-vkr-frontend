import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Index from '../pages/Index.vue'
const ifAuthenticated = (to, from, next) => {
    if (localStorage.getItem('token')) {
        next()
        return
    }
    next('/signIn')
}
const routes = [
    {
        path: '/signIn',
        name: 'login',
        component: Login
    },
    {
        path: '/signUp',
        name: 'register',
        component: Register
    },
    {
        path: '/',
        name: 'index',
        component: Index,
        beforeEnter: ifAuthenticated
    }
]
export default routes
