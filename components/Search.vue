<template>
    <div class="search">
        <div class="logo">
            <img src="@/assets/mi.svg" alt="">
        </div>
        <van-search
            class="search-input"
            value="{{ value }}"
            shape="round"
            background=""
            placeholder="搜索商品名称"
        />
        <div class="admin-icon" @click="toLogin">
            <img src="@/assets/profile.svg" v-if="!isLogin">
            <img src="http://i8.mifile.cn/b2c-mimall-media/fa83661ee38a1495b26a59e73ae15eb3.png" v-if="isLogin">
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const toLogin = () => {
        router.push('/login')
    }

    defineProps({
        isLogin: {
            type: Boolean,
            default: false
        }
    })
</script>

<style lang="stylus" scoped>
.search
    display flex
    height 8vh
    background #ffffff
    .logo
        height 100%
        width 8vh
        display flex
        justify-content center
        align-items center
        img
            max-width 60%
            max-height 60% 
    .admin-icon
        height 100%
        width 8vh
        display flex
        justify-content center
        align-items center
        img
            max-width 60%
            max-height 60%
    .search-input
        width 75%
</style>