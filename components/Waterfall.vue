<template>
    <div class="waterfall-L">
        <div class="product" v-for="item of list" :key="product">
            <div class="product-card">
                <div class="img">
                    <van-image class="v-img" :fit="contain" :src="item.img"/>
                </div>
                <div class="productName">{{ item.product }}</div>
                <div class="price">￥{{ item.price }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    list: {
        type: Array,
        default: []
    }
})
</script>

<style lang="stylus" scoped>
.waterfall-L
    // background #abcdef
    width 100%
    .product-card
        background #fff
        width 96%
        margin 1vh 2%
        border-radius 5px
        .img
            width 90%
            margin-left 5%
        .productName
            padding 1vh 0
            width 90%
            margin-left 5%
            font-weight bold
        .price
            padding 1vh 0
            color #777
</style>