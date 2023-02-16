<template lang="html">
    <div class="container">
        <div class="row ">
            <div v-for="product in listproducts" :key="product['@id']" class="list-products col-sm-3">
                <h4>{{ product.title }}</h4>
                <!-- <p> {{ product.image }} </p> -->
                <p> <img v-bind:src="'images/' + product.imgUrl" alt=""> </p>
                <p>
                    <button class="primary" type="button" name="button">Cart</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed : {
        listproducts () {
            return this.$store.state.listproducts
        },
    }
}
</script>

<style lang="scss" scoped>
    .list-products {
        position: relative;
        img {
            max-width: 300px;
        }
    }
</style>
