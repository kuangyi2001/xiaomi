<template>
    <van-sticky>
        <Search :isLogin="isLogin"/>
    </van-sticky>
    <div class="container">
        <div class="sidebar">
            <div class="scroll">
                <van-sidebar v-model="active" @change="onChange">
                    <van-sidebar-item title="推荐"/>
                    <van-sidebar-item title="Xiaomi手机"/>
                    <van-sidebar-item title="Redmi手机"/>
                    <van-sidebar-item title="游戏手机"/>
                    <van-sidebar-item title="电脑平板"/>
                    <van-sidebar-item title="智能穿越"/>
                    <van-sidebar-item title="电视"/>
                    <van-sidebar-item title="大家电"/>
                    <van-sidebar-item title="小家电"/>
                    <van-sidebar-item title="智能家居"/>
                    <van-sidebar-item title="出行运动"/>
                    <van-sidebar-item title="日用百货"/>
                    <van-sidebar-item title="儿童用品"/>
                    <van-sidebar-item title="有品精选"/>
                    <van-sidebar-item title="小米服务"/>
                </van-sidebar>
            </div>
        </div>
        <div class="produtList">
            <ProductPage v-if="state.page === 0" :productList="productList"/>
            <ProductPage v-if="state.page === 1" :productList="noteList"/>
            <ProductPage v-if="state.page === 2" :productList="productList"/>
            <ProductPage v-if="state.page === 3" :productList="noteList"/>
            <ProductPage v-if="state.page === 4" :productList="productList"/>
            <ProductPage v-if="state.page === 5" :productList="noteList"/>
            <ProductPage v-if="state.page === 6" :productList="productList"/>
            <ProductPage v-if="state.page === 7" :productList="noteList"/>
            <ProductPage v-if="state.page === 8" :productList="productList"/>
            <ProductPage v-if="state.page === 9" :productList="noteList"/>
            <ProductPage v-if="state.page === 10" :productList="productList"/>
            <ProductPage v-if="state.page === 11" :productList="noteList"/>
            <ProductPage v-if="state.page === 12" :productList="productList"/>
            <ProductPage v-if="state.page === 13" :productList="noteList"/>
            <ProductPage v-if="state.page === 14" :productList="productList"/>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useHomeStore } from '@/store/home'
import Search from '@/components/Search.vue'
import ProductPage from '@/components/ProductPage.vue'

const active = ref(0)
const state = reactive({
    page: 0
})
const onChange = (event) => {
    state.page = event
}
const homeStore = useHomeStore()
const productList = computed(() => homeStore.productList)
const noteList = computed(() => homeStore.noteList)
const isLogin = computed(() => homeStore.isLogin)
onMounted(async () => {
    await homeStore.getProductList()
    await homeStore.getnoteList()
})
</script>

<style lang="stylus" scoped>
.container
    width 100%
    display flex
.sidebar
    width 23vw
    overflow hidden
    .scroll
        height 84.5vh
        width 25vw
        overflow scroll
</style>