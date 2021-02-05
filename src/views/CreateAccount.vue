<template>
  <div class="home">
    Account number:<input v-model="accountNr"><br>
    <button v-on:click="saveInHtml()">Submit</button><br>
    <b>{{answer}}</b>
  </div>

</template>

<script>
let saveInJs = function () {
  this.$http.post('http://localhost:8080/Katrin/createAccount', {},
      {params: {accountNr: this.accountNr}})
      .then(response => this.answer = response.data)
      .catch(response => console.log(response.data))

}

export default {
  name: 'CreateAccount',
  components: {},
  data: function () {
    return {
      accountNr: '',
      answer: ''
    }
  },
  methods: {
    saveInHtml: saveInJs,
  }

}
</script>
