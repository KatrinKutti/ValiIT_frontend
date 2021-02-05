<template>
  <div class="home">
    <table border="1">
      <tr>
        <th>Account Id</th>
        <th>Account number</th>
        <th>Balance</th>
      </tr>
      <tr v-for="row in account">
        <td>{{ row.accountId }}</td>
        <td>{{ row.accountNumber }}</td>
        <td>{{ row.balance }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
let getData = function () {
  this.$http.get('http://localhost:8080/Katrin/getAccounts')
      .then(response => this.account = response.data)
      .catch(response => console.log(response))
}
let saveInJs = function () {
  this.$http.post('http://localhost:8080/Katrin/createAccount', this.account)
      .then(() => this.getData());
}

export default {
  name: 'GetAccounts',
  components: {},
  data: function () {
    return {
      account: {},
      accounts: []
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
