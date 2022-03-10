<template>
  <div id="nav">
    <router-link to="/">主页</router-link> |
    <router-link to="/add">快速求和</router-link> |
    <router-link to="/mul">快速乘法</router-link> |
    <router-link to="/frac">特征分数</router-link>
  </div>
  <router-view> </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
