<template lang="html">
    <div class="container">
        <div class="row ">
            <div v-for="product in products" :key="product['@id']" class="list-products col-sm-3">
                <h4>{{ product.title }}</h4>
                <!-- <p> {{ product.image }} </p> -->
                <!-- <p> <img v-bind:src="'images/' + product.imgUrl" alt=""> </p> -->
                <p>
                    <button class="primary" type="button" name="button" @click.prevent="addToCart(product), saveCart(product.id)">Cart</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {  mapActions, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(["products"])
    },
    methods: {
        ...mapActions(["getProducts", "addToCart", "saveCart"])
    },
    mounted() {
        this.getProducts();
    }
}
</script>

<style lang="scss" scoped>
    .list-products {
        position: relative;
        img {
            // max-width: 300px;
        }
    }
</style>
