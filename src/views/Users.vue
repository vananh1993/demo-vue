<template lang="html">
    <div class="">
        <ul>
           <li v-for="(user, idx) in users" :key="idx">
             {{ user.name }}  in {{ user.address.city }}
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

<style lang="css" scoped>
</style>
