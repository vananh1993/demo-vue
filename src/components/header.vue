<template lang="html">
    <header class="container">
        <div class="row">
            <nav class="col-sm-9 text-left">
              <router-link to="/login">Login</router-link> |
              <router-link to="/register">Register</router-link> |

              <router-link to="/listProducts">List</router-link>
              <router-link to="/user">User</router-link>

            </nav>
            <div class="col-sm-3">
                <div class="text-right cart-total">
                    <!-- <router-link to="/cart">Cart: ({{ totalCartItem }})</router-link> -->
                    <span>Cart</span>
                    <div class="cart-drawer">
                        <div v-for="item in cart" class="cart-drawer__item">
                            <p>
                                <!-- <img <img width="40" v-bind:src="'images/' + item.imgUrl" alt=""> -->
                                <span>{{ item.title }}</span>
                                <span>{{ item.qty }}</span>
                                <!-- <input width="50" type="text" name="" value="{{ item.qty }}"> -->
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(["cart"]),
        // ...mapGetters(['cart/isCart']),
        // totalCartItem() {
        //   return this.cart.reduce((acc, item) => acc + item.qty, 0);
        // }
    }
}
// import { mapGetters,  mapActions} from 'vuex'
// export default {
//     computed: {
//           ...mapGetters({
//             companies: 'cart/getCartData'
//           })
//     },
//
//     methods: {
//       ...mapActions(['cart/getCartData');
//     },
//
//     mounted() {
//       this['cart/getCartData']();
//     },
// }
// import { mapGetters, mapState } from 'vuex';
//
// export default {
//     created() {
//       // this.$store.dispatch("cart/getCartData");
//     },
//     computed: {
//         ...mapGetters({
//             cart: 'cart/getCartData'
//         }),
//         ...mapState(['cart']),
//         // totalCartItem() {
//         //   return this.cart.reduce((acc, item) => acc + item.qty, 0);
//         // }
//     },
//     mounted () {
//         this.$store.dispatch('cart/getCartData')
//     }
// }
</script>

<style lang="scss" scoped>
    header {
        margin-bottom: 50px;
        width: 100%;

    }
    p {
        margin: 0;
    }
    .col-sm-3 {
        position: relative;
    }
    .cart-total {
        cursor: pointer;
        &:hover {
            .cart-drawer {
                display: block;
            }
        }
    }
    .cart-drawer{
        display: none;
        position: absolute;
        top: 20px;
        left: 0;
        width: 200px;
        background: #fff;
        height: auto;
        font-size: 14px;
        z-index: 10;
        border: 1px solid #d6d6d6;
        padding: 5px 7px;
        &__item {
            &:last-child {
                p {
                    border-bottom: 0px;
                    margin-bottom: 0;
                    padding-bottom: 0;
                }
            }
            p {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                margin-bottom: 7px;
                padding-bottom: 7px;
                border-bottom: 1px solid #d6d6d6;

            }
        }
        input {
            width: 40px;
        }
    }
</style>
