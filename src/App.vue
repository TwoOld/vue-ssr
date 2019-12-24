<template>
  <div id="app">
    <nav>
      <router-link to="/">Index</router-link>
      <router-link to="/detail">Detail</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
