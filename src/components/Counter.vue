<template>
  <div class="count">
      <button @click="increament">Increment</button>
      <button @click="decrement">Decrement</button><br/>
      <button class="incre" @click="incre">Incre 10</button>
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
        },
        incre () {
            this.$store.commit('incre', {
              amount: 10
            })
        }
      }
    }
</script>

<style scoped>
    .count {
        margin-top: 30px;
    }
    .incre {
        margin-top: 20px;
    }
</style>
