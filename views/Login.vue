<template>
    <div class="container">
        <div class="header">
            <div class="img">
                <img src="@/assets/mi.svg" alt="">
            </div>
            <div class="name">小米商城</div>
        </div>
        <van-form @submit="onSubmit" class="form">
            <van-cell-group inset>
                <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useHomeStore } from '@/store/home'
import { useRouter } from 'vue-router';

const username = ref('')
const password = ref('')
const router = useRouter()
const logStore = useHomeStore()
const a = computed(() => logStore.isLogin)

const onSubmit = (res) => {
    if(res['用户名'] === 'aaa' && res['密码'] === 'aaa') {
        logStore.login()
        router.push('/')
    }
}
</script>

<style lang="stylus" scoped>
.header
    height 10vh
    display flex
    justify-content center
    align-items center
    margin-top 5vh
    .img
        height 6vh
        width 6vh
        img
            max-height 100%
    .name
        width 40vw
        text-align center
        font-size 20pt
        font-weight bold
.form
    margin-top 10vh
</style>