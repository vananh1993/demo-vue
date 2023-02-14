<template lang="html">
    <div class="container">
        <div v-for="product in listproducts" :key="product['@id']" class="list-products">
            <div class="col-sm-3 ">
                <h4>{{ product.name }}</h4>
                <p> {{ product.image }} </p>
                <p> <img :src="{{ product.image }}" alt=""> </p>
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
    }
</style>
