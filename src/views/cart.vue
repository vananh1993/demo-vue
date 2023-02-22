<template lang="html">
  <div class="container">
      <h1>Cart</h1>
      <div class="row">
         <div class="cart">
             <div v-for="item in cart" class="cart-item">
                 <div class="">
                     <div class="cart-img">
                        <img width="100" v-bind:src="'images/' + item.imgUrl" alt="">
                     </div>
                     <div class="cart-title">
                        <b>{{ item.title }}</b>
                     </div>
                     <div class="cart-quantity">
                        <button class="cart-quantity__subtr">
                            -
                        </button>
                        <input class="cart-quantity__input" type="text" value="1">
                        <button class="cart-quantity__plus">
                            +
                        </button>
                    </div>
                 </div>
             </div>
         </div>
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
      },
      totalPrice () {
          return this.cart.reduce((acc, item) => acc + item.salePrice, 0);
      }
    }
}
</script>

<style lang="scss" scoped>
    .cart {
        position: relative;
    }
</style>
