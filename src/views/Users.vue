<template lang="html">
    <div class="container">
        <ul>
           <li v-for="(user, idx) in users" :key="idx">
            Name:  {{ user.name }}
           </li>
         </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("loadUsers");
  },

  computed: {
    ...mapState(["users"]),
  },
};
</script>

<style lang="scss" scoped>
    ul, li {
        list-style: none;
        text-align: left;
    }
</style>
