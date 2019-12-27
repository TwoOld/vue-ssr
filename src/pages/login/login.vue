<template>
  <div>
    <el-input type="text" v-model="name"></el-input>
    <el-button type="primary" @click="handleLogin">login</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    handleLogin() {
      this.$store
        .dispatch('user/login', { name: this.name })
        .then(() => this.$router.push(this.$route.query.redirect || '/'))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>