<template>
  <div>
    123
    <button @click="login">登录</button>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
