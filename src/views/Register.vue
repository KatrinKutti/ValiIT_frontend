<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    First name:<input v-model="customer.firstName" placeholder="First name"><br>
    Last name:<input v-model="customer.lastName" placeholder="Last name"><br>
    Address:<input v-model="customer.address" placeholder="Address"><br>
    Username:<input v-model="customer.userName" placeholder="Username"><br>
    Password:<input v-model="customer.pswrd" placeholder="Password"><br>
    <button v-on:click="saveInHtml()">Submit</button>
  </div>
</template>

<script>
let saveInJs = function () {
  this.$http.post('http://localhost:8080/Katrin/registerCustomer', this.customer);
  alert('New customer registered!');
}

export default {
  name: 'Register',
  components: {},
  data: function () {
    return {
     customer:{}
    }
  },
  methods: {
    saveInHtml: saveInJs
  }
}
</script>
