<template>
    <div class="nav">
        <div class="title">购物车</div>
        <div class="edit">编辑</div>
    </div>
    <div class="container">
        <div class="cart">
            <div class="checkAll">
                <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
            </div>
            <van-checkbox-group v-model="checkeda" ref="checkedGroup">
                <div v-for="item in state.cartList" :key="item.id">
                    <van-swipe-cell class="cart-card">
                        <van-checkbox class="card-box" :name="item.name">
                            <van-card
                            class="card"
                            :num="item.num"
                            :price="item.price+'.00'"
                            desc="8GB+256GB 陶瓷黑"
                            :title="item.name"
                            :thumb="item.img"
                            />
                        </van-checkbox>
                        <template #right>
                            <van-button @click="remove(item.id)" square text="删除" type="danger" class="delete-button" />
                        </template>
                    </van-swipe-cell>
                </div>
            </van-checkbox-group>
        </div>
        <div class="computed">
            <div class="bill">
                <div class="text">合计：</div><div class="price">￥{{ state.all }}.00</div>
            </div>
            <div class="button">
                <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
                    结算
                </van-button>
            </div>
        </div>
        <div class="waterfall">
            <div class="title">- 猜你喜欢 -</div>
            <div class="waterfallBox">
                <div class="waterfall a"><Waterfall :list="waterfallL"/></div>
                <div class="waterfall b"><Waterfall :list="waterfallR"/></div>
            </div>
        </div>
    </div>
    <van-back-top bottom="15vh"/>
</template>

<script setup>
import Waterfall from '../components/Waterfall.vue'
import { onMounted, computed, ref, reactive } from 'vue'
import { useHomeStore } from '@/store/home'

const state = reactive({
    all: 0,
    cartList: []
})

const cartStore = useHomeStore()
const waterfallL = computed(() => cartStore.waterfallL)
const waterfallR = computed(() => cartStore.waterfallR)
state.cartList = JSON.parse(localStorage.getItem('cart'))

const checked = ref(false)
const checkeda = ref([])
const checkedGroup = ref(null)

const checkAll = () => {
    if(checked.value) {
        checkedGroup.value.toggleAll(true)
        for(let i =0; i < state.cartList.length; i ++) {
            state.all += parseInt(state.cartList[i].price) * state.cartList[i].num
        }
    }else {
        checkedGroup.value.toggleAll()
        state.all = 0
    }
}

// let check = ref(true)
const remove = (id) => {
    for(let i = 0; i < state.cartList.length; i ++) {
        if(state.cartList[i].id == id) {
            state.cartList.splice(i,1)
            localStorage.setItem('cart', JSON.stringify(state.cartList))
        }
    }
}

onMounted(async () => {
    await cartStore.getwaterfallL()
    await cartStore.getwaterfallR()
})
</script>

<style lang="stylus" scoped>
*
    margin 0
    padding 0
.nav
    background #fff
    height 7vh
    width 100vw
    display flex
    position sticky
    top 0
    z-index 99
    .title
        text-align center
        font-size 14pt
        padding-top 1.5vh
        position relative
        left 42vw
    .edit
        text-align center
        font-size 12pt
        padding-top 2vh
        position relative
        left 70vw
.container
    background #eee
    .cart
        // background #fedcba
        width 90vw
        margin-left 5vw
        .checkAll
            height 5vh
            padding-top 2vh
        .cart-card
            width 88vw
            border-radius 1.5vh
            overflow hidden
            background #F7F8FA
            margin 1vh 0
            .delete-button
                height 100%
            .card-box
                width 100%
                margin 1vh 0
                padding 1vh 0
                padding-left 1vw
                .card
                    width 78vw
    .computed
        background #fff
        height 8vh
        width 100%
        position fixed
        bottom 7vh
        display flex
        z-index 99
        .bill
            flex 3
            display flex
            .text
                flex 1
                height 5vh
                margin-top 2vh
                text-align right
            .price
                flex 1
                height 5vh
                margin-top 2vh
                color #FF6A00
                font-size 14pt
        .button
            flex 2
            button
                height 6vh
                width 60%
                margin 1vh 0 0 1vh
    .waterfall
        .title
            margin 5vh 0
            text-align center
        .waterfallBox
            width 100vw
            display flex
            .a
                flex 1
                text-align center
            .b
                flex 1
                text-align center
</style>