<template>
  <div class="result">
      <p> The result is {{ result }}</p>
  </div>

</template>

<script>
export default {
    computed : {
        result () {
            return this.$store.state.result
        }
    }
}
</script>

<style scoped>
</style>
