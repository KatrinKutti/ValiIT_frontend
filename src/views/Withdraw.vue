<template>
  <div class="home">
    Account number:<input v-model="accountNr"><br><br>
    Withdraw amount:<input v-model="withdraw"><br><br>
    <button v-on:click="saveInHtml()">Submit</button>
    <br><br>
    <b>{{ answer }}</b>
  </div>
</template>

<script>

let saveInJs = function () {
  this.$http.put('http://localhost:8080/Katrin/withdraw', {}, {
    params: {
      accountNr: this.accountNr,
      withdraw: this.withdraw
    }})
      .then(response => this.answer = response.data)
      .catch(error => this.answer = error.response.data.message);
}

export default {
  name: 'Withdraw',
  components: {},
  data: function () {
    return {
      accountNr: '',
      withdraw: '',
      answer: ''
    }
  },
  methods: {
    saveInHtml: saveInJs,
  },
  mounted() {
    this.getData();
  }
}
</script>
