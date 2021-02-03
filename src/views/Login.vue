<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    Username:<input v-model="userName" placeholder="Username"><br>
    Password:<input v-model="pswrd" placeholder="Password"><br>
    <button v-on:click="saveInHtml()">Submit</button>
  </div>
</template>

<script>
let saveInJs = function () {
  alert('Login successful');
}
export default {
  name: 'Login',
  components: {},
  data: function () {
    return {
      userName: '',
      pswrd: '',
    }
  },
  methods: {
    saveInHtml: saveInJs
  }
}
</script>
