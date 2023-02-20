<template lang="html">
    <div class="row">
        <nav class="col-sm-9">
          <router-link to="/login">Login</router-link> |
          <router-link to="/register">Register</router-link> |

          <router-link to="/listProducts">List</router-link>
          <span> Cart: ({{ totalCartItem }})</span>
        </nav>
        <div class="col-sm-3">
            <span>Cart </span>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['cart']),
        totalCartItem() {
          return this.cart.reduce((acc, item) => acc + item.qty, 0);
        }
    }
}
</script>

<style lang="css" scoped>
</style>
