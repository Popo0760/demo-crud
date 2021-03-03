<template>
  <div class="container">
    <h1>{{msg}}</h1>
    <el-button @click=openList>Danh sách User</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Wellcome to Vue Demo Project'
    }
  },
  methods:{
    openList(){
      this.$router.push('/users')
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
}
a {
  color: #42b983;
}
</style>
