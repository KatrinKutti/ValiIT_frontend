<template>
  <div class="home">
    Customer Id:<input v-model="customerId"><br><br>
    <button v-on:click="getData()">Get customer accounts transactions</button>
    <br><br>
    <table border="1">
      <tr>
        <th>Account Id</th>
        <th>Account number</th>
        <th>Balance</th>
        <th>Transaction history</th>
      <tr v-for="row in answer">
        <td>{{ row.accountId }}</td>
        <td>{{ row.accountNumber }}</td>
        <td>{{ row.balance }}</td>
        <td>
          <table border="1">
            <tr>
              <th>Transaction Id</th>
              <th>Deposit</th>
              <th>Withdrawal</th>
              <th>Transfer</th>
              <th>From Account number</th>
              <th>To Account number</th>
              <th>Timestamp</th>
            </tr>
            <tr v-for="historyRow in row.transactionHistoryList">
              <td>{{ historyRow.transactionId }}</td>
              <td>{{ historyRow.deposit }}</td>
              <td>{{ historyRow.withdrawal }}</td>
              <td>{{ historyRow.transfer }}</td>
              <td>{{ historyRow.fromAccount }}</td>
              <td>{{ historyRow.toAccount }}</td>
              <td>{{ historyRow.localDateTime }}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
let getData = function () {
  this.$http.get('http://localhost:8080/Katrin/accountTransactions', {params: {customerId: this.customerId}})
      .then(response => this.answer = response.data)
      .catch(error => this.answer = error.response.data.message);
}

export default {
  name: 'CustomerAccountsTransactions',
  components: {},
  data: function () {
    return {
      customerId: '',
      answer: '',

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
