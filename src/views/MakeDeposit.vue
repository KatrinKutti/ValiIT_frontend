<template>
  <div class="home">
    Account number:<input v-model="accountNr"><br>
    Deposit amount:<input v-model="deposit"><br>
    <button v-on:click="saveInHtml()">Submit</button><br>
    <b>{{answer}}</b>
  </div>
</template>
<script>
let saveInJs = function () {
  this.$http.put('http://localhost:8080/Katrin/makeDeposit', {},{params:{accountNr: this.accountNr, deposit: this.deposit}})
  .then(response => this.answer = response.data)
  .catch(error => this.answer = error.response.data.message)
}

export default {
  name: 'MakeDeposit',
  components: {},
  data: function () {
    return {
      accountNr: '',
      deposit: '',
      answer: ''
    }
  },
  methods: {
    saveInHtml: saveInJs
  }
}
</script>
