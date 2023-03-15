<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
    import Header from './components/header';
    export default {
        components: {
            Header
        }
    }
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    // height: 100vh;
    align-content: flex-start;
    flex-direction: column;
    margin: 0;
    padding: 0;
    // padding-top: 50px;

}
.container {
    width: 100%;
}
div {
    width: 100%;
    padding: 0;
    margin: 0;
}
img {
    max-width: 100%;
}
nav {
  // padding: 30px;
    width: 100%;
    a {
        font-weight: bold;
        color: #2c3e50;
        padding: 0px 20px;
        &.router-link-exact-active {
            color: #6ab4e4;
        }
    }
}
</style>
