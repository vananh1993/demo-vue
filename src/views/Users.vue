<template lang="html">
    <div class="">
        <div v-for="user in getUsers" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters['getUsers']
    },
    mounted() {
        // this.getProducts();
    }
}
</script>

<style lang="css" scoped>
</style>
