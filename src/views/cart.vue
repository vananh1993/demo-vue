<template lang="html">
  <div class="container">
      <h1>Cart</h1>
      <div class="row justify-content-center">
         <div class="cart col-sm-9 " >
             <div v-for="item in cart" class="cart-item"  :key="item['@id']">
                 <div class="d-flex">
                     <div class="cart-img">
                        <img width="70" v-bind:src="'images/' + item.imgUrl" alt="">
                     </div>
                     <div class="cart-title">
                        <b>{{ item.title }}</b>
                        <b>{{ item.id }}</b>
                     </div>
                     <div class="cart-quantity d-flex">
                        <button class="cart-quantity__subtr" @click="decreCart(item.id), saveCart(item.id)">
                            -
                        </button> &nbsp;
                        <input class="cart-quantity__input" type="text" v-model="item.qty"/> &nbsp;
                        <button class="cart-quantity__plus" @click="increCart(item.id), saveCart(item.id)">
                            +
                        </button>
                    </div>
                    <div class="cart-price">
                        <p v-if="item.salePrice">
                            <span class="line-through">{{item.price}}</span><br/>
                            <span>{{item.salePrice }}</span>
                        </p>
                        <p v-else>
                            <span>{{item.price}}</span>
                        </p>
                    </div>
                    <div class="">
                        <button type="button" name="button">
                            <img src="images/delete-icon.png" alt="">
                        </button>
                    </div>
                 </div>
             </div>
              <h3 class="cart-line text-right">
                Total :
                <span class="cart-price cart-total">{{ totalItemPrice }}</span>
              </h3>
            </div>
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters(['cart']),
        totalCartItem() {
            return this.cart.reduce((acc, item) => acc + item.qty, 0);
        },
        totalItemPrice () {
            return this.cart.reduce((acc, item) => acc + item.salePrice*item.qty  , 0);
        },
    },
    methods: {
        ...mapActions(["increCart", "decreCart", "saveCart"])
    },
    mounted() {
        // this.getProducts();
    }
}
</script>

<style lang="scss" scoped>
    .cart {
        position: relative;
    }
    .line-through {
        text-decoration: line-through;
    }
    .d-flex {
        justify-content: center;
        align-items: center;
    }
    .cart-item {
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #d6d6d6;
    }
    .text-right {
        text-align: right;
    }
    .cart-quantity {
        &__input {
            width: 50px;
            text-align: center;
        }
    }
    button {
        border: 0px;
        background: transparent;
    }
</style>
