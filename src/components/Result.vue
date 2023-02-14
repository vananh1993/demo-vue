<template>
  <div class="result">
      <p> The result is {{ result }}</p>
      <p> The result incre is {{ count }}</p>
  </div>

</template>

<script>
export default {
    computed : {
        result () {
            return this.$store.state.result
        },
        count () {
            return this.$store.state.count
        }
    }
}
</script>

<style scoped>
</style>
