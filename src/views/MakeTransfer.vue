<template>
  <div className="home">
    From account number:<input v-model="fromAccount"><br>
    To account number:<input v-model="toAccount"><br>
    Transfer amount:<input v-model="transfer"><br>
    <button v-on:click="saveInHtml()">Submit</button>
    <br>
    <b>{{ answer }}</b>
  </div>
</template>
<script>
let saveInJs = function () {
  this.$http.put('http://localhost:8080/Katrin/makeTransfer', {}, {
    params: {
      fromAccount: this.fromAccount,
      toAccount: this.toAccount,
      transfer: this.transfer
    }
  })
      .then(response => this.answer = response.data)
      .catch(error => this.answer = error.response.data.message)
}

export default {
  name: 'MakeDeposit',
  components: {},
  data: function () {
    return {
      fromAccount: '',
      toAccount:'',
      transfer: '',
      answer: ''
    }
  },
  methods: {
    saveInHtml: saveInJs
  }
}
</script>
