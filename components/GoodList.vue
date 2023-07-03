<template>
    <div class="goodList" v-for="good in productList" :key="id">
        <van-card
            :price="good.price"
            :desc="good.desc"
            :title="good.productName"
            :thumb="good.imgSrc"
        >

        </van-card>
    </div>
</template>

<script setup>
defineProps({
    productList: {
        type: Array,
        default: []
    }
})
</script>

<style lang="stylus" scoped>
</style>