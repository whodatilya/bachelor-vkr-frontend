import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Index from '../pages/Index.vue'
// const ifAuthenticated = (to, from, next) => {
//     if (localStorage.getItem('token')) {
//         next()
//         return
//     }
//     next('/login')
// }
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
        component: Index
    },
    // {
    //     path: '/signUp',
    //     name: 'register',
    //     component: () => import('@/pages/Register.vue')
    // }
]
export default routes
