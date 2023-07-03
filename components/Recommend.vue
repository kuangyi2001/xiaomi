<template>
    <div class="container">
        <div>
            <van-swipe class="swipe" :autoplay="3000">
                <van-swipe-item v-for="swipe of swiperList" :key="swipe.id">
                    <img class="swipe-img" :src="swipe.imgSrc">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="more">
            <van-grid :column-num="5">
                <van-grid-item 
                    v-for="item of moreList" 
                    :key="item.id"
                    :icon="item.icon"
                    :text="item.title"
                ></van-grid-item>
            </van-grid>
        </div>
        <div class="popProducts">
            <div class="imgBox">
                <img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/16305100fd7913dd727e8906b97e8998.png?f=webp&w=537&h=762&bg=DDE2E6"
                >
            </div>
            <div class="imgBox">
                <div class="img">
                    <img 
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8a28a90c3c449ba422a10e40085d2e9.png?f=webp&w=537&h=378&bg=DBDEEF"
                    >
                </div>
                <div class="img">
                    <img 
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/200a6f45d1ccbf7d8fd92f4bbe2842d4.jpeg?f=webp&w=537&h=378&bg=F3E7E7"
                    >
                </div>
            </div>
        </div>
        <div class="productList">
            <div class="adImg">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8413c40c709976450cce66a567d13236.jpg?f=webp&w=1080&h=660&bg=FFFFFF">
            </div>
            <ProductCard :productList="productList" :name="`小米手机`"/>
        </div>
        <div class="productList">
            <div class="adImg">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/396893c2d8416dc791cc3cd7f8a65bdf.jpeg?f=webp&w=1080&h=660&bg=FFFFFF">
            </div>
            <ProductCard :name="`小米电视`"/>
        </div>
        <div class="productList">
            <div class="adImg">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/393a90da633889384d35acb7c44eeb17.jpg?f=webp&w=1080&h=660&bg=FFFFFF">
            </div>
            <ProductCard :productList="noteList" :name="`小米笔记本`"/>
        </div>
        <div class="productList">
            <div class="adImg">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5442b538b27d4664b61b740e8934753b.jpg?f=webp&w=1080&h=660&bg=FFFFFF">
            </div>
            <ProductCard :name="`小米米家`"/>
        </div>
        <div class="space">
        </div>
    </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
    swiperList: {
        type: Array,
        default: []
    },
    moreList: {
        type: Array,
        default: []
    },
    productList: {
        type: Array,
        default: []
    },
    noteList: {
        type: Array,
        default: []
    }
})
</script>

<style lang="stylus" scoped>
.container
    background #efefef
.swipe
    // width 100%
    height 22vh
    .swipe-img
        max-width 100%
.popProducts
    height 40vh
    width 100%
    display flex
    .imgBox
        height 100%
        width 50%
        .img
            height 50%
            width 100%
    img
        max-width 100%
.productList
    padding-top 1vh
    padding-bottom 1vh
.adImg
    height 34.4vh
    width 100%
    img
        max-width 100%
.space
    height 10vh
</style>