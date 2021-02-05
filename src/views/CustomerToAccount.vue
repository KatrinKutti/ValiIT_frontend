<template>
  <div class="home">
    Customer Id:<input v-model="customerId"><br>
    Account Id:<input v-model="accountId"><br>

    <button v-on:click="saveInHtml()">Submit</button><br>
    <b>{{answer}}</b>
  </div>

</template>

<script>
let saveInJs = function () {
  this.$http.post('http://localhost:8080/Katrin/customerToAccount', {}, {
    params: {
      customerId: this.customerId,
      accountId: this.accountId
    }
  })
      .then(response => this.answer = response.data)
      .catch(response => console.log(response.data))
}

export default {
  name: 'CustomerToAccount',
  components: {},
  data: function () {
    return {
      customerId: '',
      accountId: '',
      answer: ''
    }
  },
  methods: {
    saveInHtml: saveInJs
  }
}
</script>
