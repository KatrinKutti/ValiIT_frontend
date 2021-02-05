<template>
  <div class="home">
    <table border="1">
      <tr>
        <th>Customer Id</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Address</th>
      </tr>
      <tr v-for="row in customer">
        <td>{{ row.customerId }}</td>
        <td>{{ row.firstName }}</td>
        <td>{{ row.lastName }}</td>
        <td>{{ row.address }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
let getData = function () {
  this.$http.get('http://localhost:8080/Katrin/getCustomers')
      .then(response => this.customer = response.data)
      .catch(response => console.log(response))
}
let saveInJs = function () {
  this.$http.post('http://localhost:8080/Katrin/registerCustomer', this.customer)
      .then(() => this.getData());
}

export default {
  name: 'GetCustomers',
  components: {},
  data: function () {
    return {
      customer: {},
      customers: []
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
