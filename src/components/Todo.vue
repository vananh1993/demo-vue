<template lang="html">
    <div class="todo">
        <li v-for="item in todolist">
          {{ item.title }}
          <button  type="button" name="button">Delete</button>
        </li>
    </div>
</template>

<script>
export default {
    computed : {
        todolist () {
            return this.$store.state.todolist
        }
    },
    methods: {
      delete () {
          return this.$store.state.todolist
      }
    }
}
</script>

<style lang="css" scoped>
    .todo {
        margin-top: 50px;
    }
</style>
