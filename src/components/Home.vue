<template>
  <div id="app">
    <el-button type="info" @click="loginout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    loginout () {
      // 这是退出操作
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
