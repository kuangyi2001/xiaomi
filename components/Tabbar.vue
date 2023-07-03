<template>
    <van-tabbar class="tabbar" v-model="state.active" @change="onChange">
        <router-link class="routerLink" to="home">
            <van-tabbar-item icon="shop-o">首页</van-tabbar-item>
        </router-link>
        <router-link class="routerLink" to="classified">
            <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
        </router-link>
        <router-link class="routerLink" to="mi">
            <van-tabbar-item icon="eye-o">米圈</van-tabbar-item>
        </router-link>
        <router-link class="routerLink" to="cart">
            <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
        </router-link>
        <router-link class="routerLink" to="profile">
            <van-tabbar-item icon="user-o">我的</van-tabbar-item>
        </router-link>
    </van-tabbar>
</template>

<script setup>
    import { reactive, onMounted } from 'vue'

    const state = reactive({
        active: 0
    })
    const onChange = (event) => {
        // console.log(event);
        state.active = event
        localStorage.setItem('page', event)
    }
</script>

<style lang="stylus" scoped>
    .tabbar
        display flex
        z-index 99
        .routerLink
            flex 1
            margin-top .5rem
</style>