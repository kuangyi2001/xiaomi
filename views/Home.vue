<template>
    <Search :isLogin="isLogin"/>
    <div class="tab">
        <van-tabs animated>
        <van-tab title="推荐">
            <div class="pageScroll">
                <Recommend
                    :swiperList="swiperList"
                    :moreList="moreList"
                    :productList="productList"
                    :noteList="noteList"
                />
            </div>
        </van-tab>
        <van-tab title="智能">
            <div class="pageScroll">
                <Recommend
                    :swiperList="swiperList"
                    :moreList="moreList"
                    :productList="productList"
                    :noteList="noteList"
                />
            </div>
        </van-tab>
        <van-tab title="电视">
            <div class="pageScroll">
                <Recommend
                    :swiperList="swiperList"
                    :moreList="moreList"
                    :productList="productList"
                    :noteList="noteList"
                />
            </div>
        </van-tab>
        <van-tab title="家电">
            <div class="pageScroll">
                <Recommend
                    :swiperList="swiperList"
                    :moreList="moreList"
                    :productList="productList"
                    :noteList="noteList"
                />
            </div>
        </van-tab>
        <van-tab title="笔记本">
            <div class="pageScroll">
                <Recommend
                    :swiperList="swiperList"
                    :moreList="moreList"
                    :productList="productList"
                    :noteList="noteList"
                />
            </div>
        </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import Search from '@/components/Search.vue'
import Recommend from '@/components/Recommend.vue'
import { onMounted, computed } from 'vue'
import { useHomeStore } from '@/store/home'

const homeStore = useHomeStore()
const swiperList = computed(() => homeStore.swiperList)
const moreList = computed(() => homeStore.moreList)
const productList = computed(() => homeStore.productList)
const noteList = computed(() => homeStore.noteList)
const isLogin = computed(() => homeStore.isLogin)

onMounted(async () => {
    await homeStore.getSwiperList()
    await homeStore.getMoreList()
    await homeStore.getProductList()
    await homeStore.getnoteList()
})

</script>

<style lang="stylus" scoped>
.pageScroll
    width 100%
    height 80vh
    overflow scroll
</style>