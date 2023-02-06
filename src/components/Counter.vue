<template>
  <div class="count">
      <button @click="increament">Increment</button>
      <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
    export default {
      methods: {
        increament () {
            this.$store.state.result++
        },
        decrement () {
            this.$store.state.result--
        }
      }
    }
</script>

<style scoped>
    .count {
        margin-top: 30px;
    }
</style>
