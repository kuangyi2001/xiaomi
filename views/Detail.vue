<template>
    <div class="back" @click="backToHome">
        <div class="icon">
            <van-icon name="arrow-left" />
        </div>
    </div>
    <View :data="detail"/>
    <tab @add="addCart" :product="product"/>
</template>

<script setup>
import { reactive, onMounted,computed } from 'vue'
import { useHomeStore } from '@/store/home'
import View from '@/components/Detailview.vue'
import tab from '@/components/Detailtab.vue'
import { useRouter } from 'vue-router';

const state = reactive({
    id: 0,
    product: []
})
const router = useRouter()
const detailStore = useHomeStore()
// const detailId = computed(() => detailStore.detailId)
const detail = computed(() => detailStore.detail[state.id])
const product = computed(() => detailStore.productList[state.id])
const addCart = (obj) => {
    let cartData = JSON.parse(localStorage.getItem('cart'))
    if (!cartData) {
        cartData =  []
        cartData.push(obj)
    }else {
        for(let i = 0; i <= cartData.length; i ++){
            // console.log(i, cartData.length);
            if(i < cartData.length) {
                if(cartData[i].id == obj.id) {
                    cartData[i].num ++
                    break
                }
            }else {
                cartData.push(obj)
                break
            }
        }
    }
    localStorage.setItem('cart', JSON.stringify(cartData))
}

onMounted(async () => {
    const id = window.location.href.match(/id=(.*)/)[1]
    // await detailStore.getDetailId(id)
    await detailStore.getdetail()
    await detailStore.getProductList()
    await detailStore.changeTabShow()
    
    state.id = id-1
})

const backToHome = () => {
    detailStore.changeTabShow()
    router.back()
}
</script>

<style lang="stylus" scoped>
*
    margin 0
    padding 0
.back
    background rgba(128, 128, 128, 0.3)
    height 4vh
    width 4vh
    text-align center
    border-radius 2vh
    position fixed
    top 1vh
    left 1vh
    z-index 99
    .icon
        position relative
        top .6vh
</style>