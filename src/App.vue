<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register Customer</router-link> |
      <router-link to="/createAccount">Create account</router-link> |
      <router-link to="/customerToAccount">Customer to Account</router-link> |
      <router-link to="/getBalance">Get balance</router-link> |
      <router-link to="/makeDeposit">Deposit money</router-link> |
      <router-link to="/withdraw">Withdraw money</router-link> |
      <router-link to="/makeTransfer">Transfer money</router-link> |
      <router-link to="/getCustomers">Get customers</router-link> |
      <router-link to="/getAccounts">Get accounts</router-link> |
      <router-link to="/getTransactions">Get transactions</router-link> |
      <router-link to="/customerAccountsTransactions">Customer accounts transactions</router-link> |

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
