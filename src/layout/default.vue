<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/detail">Detail</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    if (!this.$store.state.user.token) {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #000;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
