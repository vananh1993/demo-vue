<template lang="html">
    <div class="todo">
        <li v-for="item in todolist">
          {{ item.id }}
        </li>
    </div>
</template>

<script>
export default {
    computed : {
        todolist () {
            return this.$store.state.todolist
        }
    }
}
</script>

<style lang="css" scoped>
</style>
