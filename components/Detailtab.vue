<template>
    <div class="tab">
        <div class="box">
            <div class="icon"><van-icon name="service-o" /></div>
            <div class="text">客服</div>
        </div>
        <div class="box">
            <div class="icon"><van-icon name="like-o" /></div>
            <div class="text">收藏</div>
        </div>
        <div class="box" @click="toCart">
            <div class="icon"><van-icon name="shopping-cart-o" /></div>
            <div class="text">购物车</div>
        </div>
        <div class="buy">
            <div class="button">
                <van-button color="linear-gradient(to right, #FFe168, #FF6700)" @click="addToCart">加入购物车</van-button>
                <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">立即购买</van-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    product: {
        type: Array,
        default: []
    }
})

const router = useRouter()

const emit = defineEmits(['add'])
const addToCart = () => {
    const obj = {
        id: props.product.id,
        img: props.product.imgSrc,
        name: props.product.productName,
        price: props.product.price,
        num: 1
    }
    emit('add', obj)
}
const toCart = () => {
    window.location.href = '/cart'
    // console.log('111');
}
</script>

<style lang="stylus" scoped>
.tab
    background #fff
    height 8vh
    width 100%
    position fixed
    bottom 0
    display flex
    .box
        flex 1
        text-align center
        padding-top 1vh
        .icon
            font-size 16pt
        .text
            font-size 10pt
    .buy
        flex 4
        .button
            background #ffdeab
            height 6vh
            width 52vw
            margin-top 1vh
            margin-left 5vw
            border-radius 3vh
            overflow hidden
            button
                height 6vh
                width 26vw
                font-size 10pt
                border 0px solid #fff
</style>