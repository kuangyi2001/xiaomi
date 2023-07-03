<template>
    <van-sticky>
        <Search :isLogin="isLogin"/>
    </van-sticky>
    <div class="component">
        <Comments :commentList="commentList"/>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useHomeStore } from '@/store/home'
import Comments from '@/components/Comments.vue'
import Search from '@/components/Search.vue'

const store = useHomeStore()
const commentList = computed(() => store.commentList)
const isLogin = computed(() => store.isLogin)
onMounted(async () => {
    await store.getcommentList()
})
</script>

<style lang="stylus" scoped>
*
    margin 0
    padding 0
</style>