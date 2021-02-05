<template>
  <div class="home">
    <table border="1">
      <tr>
        <th>Transaction Id</th>
        <th>Account number</th>
        <th>Deposits</th>
        <th>Withdrawals</th>
        <th>Transfers</th>
        <th>From Account number</th>
        <th>To Account number</th>
        <th>Timestamp</th>

      </tr>
      <tr v-for="row in transaction">
        <td>{{ row.transactionId }}</td>
        <td>{{ row.accountNr }}</td>
        <td>{{ row.deposit }}</td>
        <td>{{ row.withdrawal}}</td>
        <td>{{ row.transfer }}</td>
        <td>{{ row.fromAccount }}</td>
        <td>{{ row.toAccount }}</td>
        <td>{{ row.localDateTime }}</td>

      </tr>
    </table>
  </div>
</template>

<script>
let getData = function () {
  this.$http.get('http://localhost:8080/Katrin/getTransactions')
      .then(response => this.transaction = response.data)
      .catch(response => console.log(response))
}
let saveInJs = function () {
  this.$http.post('http://localhost:8080/Katrin/getTransactions', this.transaction)
      .then(() => this.getData());
}

export default {
  name: 'GetTransactions',
  components: {},
  data: function () {
    return {
      transaction: {},
      transactions: []
    }
  },
  methods: {
    saveInHtml: saveInJs,
    getData: getData,
  },
  mounted() {
    this.getData();
  }
}
</script>
