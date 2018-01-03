<template>
  <div id="app">
    <vue-number-pwd 
      :number="4"
      @validate="validate"
      @stepValidate="stepValidate"
    ></vue-number-pwd>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    validate(pwd){
      console.log(pwd);
    },
    stepValidate(pwd){
      console.log(pwd);
    }
  }
}
</script>

<style>

</style>
