<template>
    <div class="container">
        <div class="product">
            <div class="swipe">
                <van-swipe
                class="my-swipe"
                :autoplay="3000">
                    <van-swipe-item v-for="i in data.productImg" :key="i">
                        <img :src="i">
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="price">￥{{ data.price }}</div>
            <div class="gift">
                <div class="a">赠品</div>
                <div class="b">预计的210米金</div>
                <div class="c">查看</div>
            </div>
            <div class="name">{{ data.productName }}</div>
            <div class="title">{{ data.title }}</div>
            <ad :adword="data.adword"/>
            <div class="toAd">{{ data.toAd }}<van-icon class="icon" name="arrow" /></div>
            <config :config="data.config"/>
        </div>
        <div class="desc">
            <div class="title">商品详情</div>
            <div class="img" v-for="i in data.img" :key="i">
                <img :src="i">
            </div>
        </div>
        <van-back-top bottom="10vh"/>
        <div class="space"  style="height: 8vh;"></div>
    </div>
</template>

<script setup>
import ad from './detailCom/ad.vue'
import config from './detailCom/config.vue'

const props = defineProps({
    data: {
        type: Object,
        default: []
    }
})
</script>

<style lang="stylus" scoped>
.container
    background #eee
    z-index 999
    .product
        background #fff
        width 100%
        .my-swipe
            height 62vh
            width 100vw
            img
                max-width 100%
        .price
            height 5vh
            padding 1vh
            font-size 18pt
            font-weight bold
            color #FF6700
        .gift
            background #FFF2EF
            height 4vh
            width 90vw
            margin-left 5vw
            display flex
            color #FF6700
            font-size 10pt
            border-radius .5vh
            .a
                border 1px solid #FF6700
                height 60%
                margin .5vh 2vw 0 3vw
                border-radius .5vh
                padding 0 1vw
            .b
                border 1px solid #FF6700
                height 60%
                margin .5vh 1vw 0 0
                border-radius .5vh
                padding 0 1vw
            .c
                background #FF6700
                color #FFF2EF
                height 60%
                border-radius .5vh
                position relative
                left 35vw
                margin .5vh 0 0 0
                padding 0.2vh 1.5vw
        .name
            font-weight bold
            margin 5vw
        .title
            width 90vw
            margin-left 5vw
            font-size 10pt
        .toAd
            background #eee
            font-size 10pt
            width 75vw
            margin 2vh 5vw
            padding 0 1vw
            border-radius 1vh
            display flex
            justify-content center
            .icon
                font-size 6pt
                margin-top .5vh

    .desc
        background #fff
        margin-top 2vh
        .title
            height 6vh
            text-align center
            font-size 18pt
            padding 2vh
        .img
            img
                max-width 100%
</style>