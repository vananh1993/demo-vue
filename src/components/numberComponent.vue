<template lang="html">
    <div class="number">
        <h2>Steps {{ numbers }}</h2>
    </div>
</template>

<script>
export default {
    name: "numberComponent",
    props: {
        numbers: Array
    }
}
</script>

<style lang="scss" scoped>
    .number {
        color: red;
        padding: 20px 0;
    }
</style>
