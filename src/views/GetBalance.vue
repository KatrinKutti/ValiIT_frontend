<template>
  <div class="home">
    Account number:<input v-model="accountNr"><br><br>
    <button v-on:click="getData()">Get balance</button><br><br>
    <b>{{answer}}</b>
  </div>
</template>

<script>
let getData = function () {
  this.$http.get('http://localhost:8080/Katrin/getBalance', {params:{accountNr: this.accountNr}})
      .then(response => this.answer = response.data)
      .catch(error => this.answer = error.response.data.message);
}

export default {
  name: 'GetBalance',
  components: {},
  data: function () {
    return {
      accountNr: '',
      answer: ''
    }
  },
  methods: {
    getData: getData,
  },
  mounted() {
    this.getData();
  }
}
</script>
