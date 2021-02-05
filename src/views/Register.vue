<template>
  <div class="home">
    First name:<input v-model="firstName" placeholder="First name"><br>
    Last name:<input v-model="lastName" placeholder="Last name"><br>
    Address:<input v-model="address" placeholder="Address"><br>
    Username:<input v-model="userName" placeholder="Username"><br>
    Password:<input v-model="password" placeholder="Password"><br>
    <button v-on:click="saveInHtml()">Submit</button><br>
    <b>{{answer}}</b>
  </div>
</template>

<script>
let saveInJs = function () {
  this.$http.post('http://localhost:8080/Katrin/registerCustomer', {},{
    params: {
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      userName: this.userName,
      password: this.password
    }})
      .then(response => this.answer = response.data)
      .catch(response => console.log(response.data))
}

export default {
  name: 'Register',
  components: {},
  data: function () {
    return {
      firstName: '',
      lastName: '',
      address: '',
      userName: '',
      password: '',
      answer: ''
    }
  },
  methods: {
    saveInHtml: saveInJs
  }
}
</script>
