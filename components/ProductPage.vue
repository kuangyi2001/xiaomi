<template>
    <div class="page">
        <div class="img">
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/caca3bd4296677ea56f3c10c0a0d184b.png?w=734&h=220&bg=10" alt="">
        </div>
        <div class="good-list">
            <van-tabs v-model="active" scrollspy sticky offset-top="21vh" swipe-threshold="2">
                <van-tab title="Xiaomi 数字系列">
                    <div class="list-title">Xiaomi 数字系列</div>
                    <GoodList :productList="productList"/>
                </van-tab>
                <van-tab title="Xiaomi MIX 系列">
                    <div class="list-title">Xiaomi MIX 系列</div>
                    <GoodList :productList="productList"/>
                </van-tab>
                <van-tab title="Xiaomi Civi">
                    <div class="list-title">Xiaomi Civi</div>
                    <GoodList :productList="productList"/>                    
                </van-tab>
                <van-tab title="手机配件">
                    <div class="list-title">手机配件</div>
                    <GoodList :productList="productList"/>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import GoodList from './GoodList.vue'

defineProps({
    productList: {
        type: Array,
        default: []
    }
})

const active = ref(0)
</script>

<style lang="stylus" scoped>
.page
    width 75vw
    .img
        width 100%
        height 13vh
        img
            max-height 100%
            max-width 100%
    .good-list
        height 72vh
        overflow hidden
        overflow scroll
        .list-title
            padding 1vh
</style>