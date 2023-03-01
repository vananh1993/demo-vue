<template lang="html">
    <div class="container">
        <div class="row list-products ">
            <div v-for="product in products" :key="product['@id']" class="list-products__item col-sm-3">
                <h4>{{ product.title }}</h4>
                <!-- <p> {{ product.image }} </p> -->
                <p> <img width="100" v-bind:src="'images/' + product.imgUrl" alt=""> </p>
                <p>
                    <button class="primary" type="button" name="button" @click.prevent="addToCart(product), saveCart(product.id)">Cart</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {  mapActions, mapGetters, mapState } from 'vuex'
export default {
    created() {
      this.$store.dispatch("loadProducts");
    },
    computed: {
        ...mapState(["products"]),
    },
    methods: {
        ...mapActions(["addToCart", "saveCart"])
    },
    mounted() {
        // this.getProducts();
    }
}
</script>

<style lang="scss" scoped>
    .list-products {
        position: relative;
        img {
            // max-width: 300px;
        }
        &__item {
            margin-bottom: 15px;
        }
    }
</style>
