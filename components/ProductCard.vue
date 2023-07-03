<template>
    <div class="productList">
            <div class="productCard" v-for="product of productList" :key="product.id">
                <div class="img"><img :src="product.imgSrc"></div>
                <div class="name">{{ product.productName }}</div>
                <div class="desc">{{ product.desc }}</div>
                <div class="price">￥{{ product.price }}起</div>
                <div class="buttonBox">
                    <van-button class="button"  color="linear-gradient(to right, #ff6034, #ee0a24)" @click="toDeatil(product.id)">立即购买</van-button>
                </div>
            </div>
        <div class="moreProducts">更多{{ name }}产品<van-icon name="arrow"></van-icon></div>
    </div>
</template>

<script setup>
import {  useRouter } from 'vue-router';

defineProps({
    productList: {
        type: [],
        default: []
    },
    name: {
        type: String,
        default: ''
    }
})
const router = useRouter()
const toDeatil = (iid) => {
    window.location.href = `/detail?id=${iid}`
    // router.push({ name: 'detail', query: { id: iid} })
}
</script>

<style lang="stylus" scoped>
*
    margin 0
    padding 0
    border 0px
.productList
    margin-bottom 1rem
    display flex
    flex-wrap wrap
    background #ffffff
    .productCard
        height 42vh
        width 48vw
        &:nth-child(odd)
            margin-right 3vw
        .img
            width 100%
            img
                max-height 100%
                max-width 100%
        .name
            text-align center
        .desc
            text-align center
            color #a1a1a1
            font-size 14px
        .price
            text-align center
            color #EA625B
            font-size 14px
        .buttonBox
            width 100%
            height 10vh
            display flex
            justify-content center
            align-items center
            .button
                width 40%
    .moreProducts
        width 100vw
        text-align center
        color #a2a2a2
</style>