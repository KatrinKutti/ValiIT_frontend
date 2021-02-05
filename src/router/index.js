import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Register from '../views/Register'
import CreateAccount from "../views/CreateAccount"
import GetBalance from "../views/GetBalance";
import MakeDeposit from "../views/MakeDeposit"
import Withdraw from "../views/Withdraw"
import MakeTransfer from "../views/MakeTransfer"
import GetCustomers from "../views/GetCustomers";
import GetAccounts from "../views/GetAccounts"
import GetTransactions from "../views/GetTransactions"
import CustomerToAccount from "../views/CustomerToAccount";
import CustomerAccountsTransactions from "@/views/CustomerAccountsTransactions";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/createAccount',
        name: 'CreateAccount',
        component: CreateAccount
    },
    {
        path: '/customerToAccount',
        name: 'CustomerToAccount',
        component: CustomerToAccount
    },
    {
        path: '/getBalance',
        name: 'GetBalance',
        component: GetBalance
    },
    {
        path: '/makeDeposit',
        name: 'MakeDeposit',
        component: MakeDeposit
    },
    {
        path: '/withdraw',
        name: 'Withdraw',
        component: Withdraw
    },
    {
        path: '/makeTransfer',
        name: 'MakeTransfer',
        component: MakeTransfer
    },
    {
        path: '/getCustomers',
        name: 'getCustomers',
        component: GetCustomers
    },
    {
        path: '/getAccounts',
        name: 'GetAccounts',
        component: GetAccounts
    },
    {
        path: '/getTransactions',
        name: 'GetTransactions',
        component: GetTransactions
    },
    {
        path: '/customerAccountsTransactions',
        name: 'CustomerAccountsTransactions',
        component: CustomerAccountsTransactions
    },

]

const router = new VueRouter({
    routes
})

export default router
