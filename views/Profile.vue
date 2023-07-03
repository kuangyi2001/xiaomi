<template>
    <div class="nav">
        <div class="nav_avatar" :class="{active: state.navShow}"></div>
        <div class="nav_userName" :style="state.nameStyle">未登入</div>
        <div class="nav_action">
            <div class="action-text">会员码</div>
            <div class="action-icon">
                <van-icon class="icon" name="qr"></van-icon>
                <van-icon class="icon" name="setting-o"></van-icon>
                <van-icon class="icon" name="chat-o"></van-icon>
            </div>
        </div>
    </div>
    <div class="profile">
        <div class="userA" @click="toLogin">
            <van-sticky :offset-top="2">
                <div class="user_avatar" :style="state.avaStyle">
                    <img src="@/assets/profile.svg" v-if="!isLogin">
                    <img src="http://i8.mifile.cn/b2c-mimall-media/fa83661ee38a1495b26a59e73ae15eb3.png" v-if="isLogin">
                </div>
            </van-sticky>
            <div class="user_info">
                <div class="info-name" v-if="!isLogin">未登入</div>
                <div class="info-name" v-if="isLogin">aaa</div>
                <div class="info-id">
                    <div class="id">小米ID:1313513543</div>
                    <div class="medal">勋章<van-icon name="arrow"/></div>
                </div>
            </div>
        </div>
        <div class="userB">
            <div class="user_account">
                <div class="account_coin">
                    <div class="number">0</div>
                    <div class="tip">米金</div>
                </div>
                <div class="account_coupon">
                    <div class="number">4</div>
                    <div class="tip">优惠券</div>
                </div>
                <div class="account_redPacket">
                    <div class="number">0元</div>
                    <div class="tip">红包</div>
                </div>
                <div class="account_limit">
                    <div class="number">20万元</div>
                    <div class="tip">最高额度</div>
                </div>
                <div class="account_wallet">
                    <van-icon name="paid"></van-icon>
                    <div class="tip">钱包</div>
                </div>
            </div>
            <div class="user_mall-img">
                <van-image :fit="cover"
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8413c40c709976450cce66a567d13236.jpg?f=webp&w=1080&h=660&bg=FFFFFF"/>
            </div>
        </div>
         <div class="order">
            <div class="order_top">
                <div class="top a"><div class="text">收藏</div><div class="num">23</div></div>
                <div class="top b"><div class="text">足迹</div><div class="num">25</div></div>
                <div class="top c"><div class="text">关注</div><div class="num">10</div></div>
            </div>
            <div class="order_bottom">
                <div class="bottom a"><div class="icon"><van-icon name="pending-payment" /></div><div class="text">待付款</div></div>
                <div class="bottom b"><div class="icon"><van-icon name="logistics" /></div><div class="text">待收货</div></div>
                <div class="bottom c"><div class="icon"><van-icon name="smile-comment-o" /></div><div class="text">待评价</div></div>
                <div class="bottom d"><div class="icon"><van-icon name="exchange" /></div><div class="text">退款/售后</div></div>
                <div class="bottom e"><div class="icon"><van-icon name="records" /></div><div class="text">全部订单</div></div>
            </div>
         </div>
         <div class="server">
            <div class="server_title">
                <div class="text">服务</div>
                <div class="more">
                    <div class="text">查看更多</div>
                    <div class="icon"><van-icon name="arrow" /></div>
                </div>
            </div>
            <div class="server_action">
                <div class="action a"><div class="icon"><van-icon name="send-gift" /></div><div class="text">一键安装</div></div>
                <div class="action b"><div class="icon"><van-icon name="sort" /></div><div class="text">一键退换</div></div>
                <div class="action c"><div class="icon"><van-icon name="phone-circle" /></div><div class="text">一键维修</div></div>
                <div class="action d"><div class="icon"><van-icon name="todo-list" /></div><div class="text">服务进度</div></div>
                <div class="action e"><div class="icon"><van-icon name="gem" /></div><div class="text">小米之家</div></div>
                <div class="action f"><div class="icon"><van-icon name="service" /></div><div class="text">客服中心</div></div>
                <div class="action g"><div class="icon"><van-icon name="checked" /></div><div class="text">以旧换新</div></div>
                <div class="action h"><div class="icon"><van-icon name="graphic" /></div><div class="text">手机电池</div></div>
            </div>
         </div>
         <div class="swiper">
            <van-swipe class="swipe" :autoplay="3000">
                <van-swipe-item v-for="swipe of swiperList" :key="id" v-lazy="swipe">
                    <img class="swipe-img" :src="swipe.imgSrc">
                </van-swipe-item>
            </van-swipe>
         </div>
         <div class="waterfall">
            <div class="title">- 猜你喜欢 -</div>
            <div class="waterfallBox">
                <div class="waterfall a"><Waterfall :list="waterfallL"/></div>
                <div class="waterfall b"><Waterfall :list="waterfallR"/></div>
            </div>
        </div>
        <div class="space" style="height: 10vh;"></div>
    </div>
    <van-back-top bottom="10vh"/>
</template>

<script setup>
import Waterfall from '../components/Waterfall.vue'
import { onMounted, reactive, computed } from 'vue'
import { useHomeStore } from '@/store/home'
import { useRouter } from 'vue-router'

const router = useRouter()

const homeStore = useHomeStore()
const swiperList = computed(() => homeStore.swiperList)
const waterfallL = computed(() => homeStore.waterfallL)
const waterfallR = computed(() => homeStore.waterfallR)
const isLogin = computed(() => homeStore.isLogin)

const state = reactive({
    navShow: true,
    nameStyle: 'opacity: 0',
    avaStyle: 'height:calc(40px + 10px*(30/30));width:calc(40px + 10px*(30/30))'
})

const toLogin = () => {
    router.push('/login')
}

onMounted(async () => {
    await homeStore.getSwiperList()
    await homeStore.getwaterfallL()
    await homeStore.getwaterfallR()
    window.addEventListener('scroll', () => {
        const top = Math.floor(document.documentElement.scrollTop || document.body.scrollTop)
        if(top < 30) {
            state.nameStyle = `opacity:calc(${top}/30)`
            state.avaStyle = `height:calc(50px - ${top}px);width:calc(50px - ${top}px)`
        }else if(top > 60) {
            state.navShow = false
        }else if(top < 60) {
            state.navShow = true
        }
    })
})

</script>

<style lang="stylus" scoped>
*
    margin 0
    padding 0
.nav
    height 6vh
    width 100vw
    display flex
    align-items center
    position sticky
    top 0
    z-index 99
    .nav_avatar
        flex 1
        height 6vh
        background #fff
        &.active
            opacity 0
    .nav_userName
        background #fff
        flex 2
        height 5vh
        padding-top 1vh
        text-align left
        justify-content center
    .nav_action
        text-align center
        background #fff
        flex 7
        display flex
        align-items center
        height 100%
        .action-text
            flex 2
            text-align right
            font-size 10pt
        .action-icon
            flex 1
            width 12vh
            font-size 15pt
            display flex
            .icon
                display block
                flex 1

.profile
    background #f4f4f4
    width 100%
    .userA
        // background #fedaeb
        background #fff
        width 100%
        height 10vh
        display flex
        align-items center
        .user_avatar
            margin 1vh
            z-index 999
            img
                max-width 100%
        .user_info
            margin-left 1vh
            .info-name
                font-size 13pt
                margin 0.8vh 0
            .info-id
                height 3vh
                font-size 10pt
                color #7f7f7f
                display flex
                .id
                    background #eeeeee
                    padding 0 0.5em
                    margin-right 1em
                    border-radius 1.5vh
                .medal
                    background #eeeeee
                    padding 0 0.5em
                    border-radius 1.5vh
    .userB
        background #fff
        height 25vh
        width 90vw
        margin-left 5vw
        margin-top 1vh
        .user_account
            // background #abcdef
            height 30%
            width 100%
            display flex
            text-align center
            .number
                font-size 13pt
            .tip
                font-size 10pt
                color #7f7f7f
            .account_coin
                flex 1
                height 100%
                .number
                    padding 1vh 0
            .account_coupon
                flex 1
                height 100%
                .number
                    padding 1vh 0
            .account_redPacket
                flex 1
                height 100%
                .number
                    padding 0.8vh 0
            .account_limit
                flex 1
                height 100%
                .number
                    padding 0.8vh 0
            .account_wallet
                flex 1
                height 100%
                font-size 20pt
                padding-top 0.5vh
        .user_mall-img
            background #eeeeee
            height 15.5vh
            margin-top 2vh
            border-radius 2vh
            overflow hidden
            img
                max-width 100%
    .order
        background #fff
        height 20vh
        width 90vw
        margin 5vw
        border-radius 1vh
        .order_top
            height 35%
            display flex
            justify-content center
            align-items center
            border-bottom 2px solid #eee
            .top
                flex 1
                text-align center
                display flex
                justify-content center
                align-items center
                &:nth-last-child(n+2)
                    border-right 2px solid #eee
                .text
                    color #7f7f7f
                    padding 5px
                .num
                    margin-top 2px
        .order_bottom
                height 65%
                display flex
                justify-content center
                align-items center
                .bottom
                    flex 1
                    .icon
                        font-size 20pt
                        text-align center
                    .text
                        font-size 10pt
                        text-align center
    .server
        background #fff
        height 30vh
        width 90vw
        margin-left 5vw
        border-radius 1vh
        .server_title
            height 20%
            display flex
            align-items center
            .text
                font-size 15pt
                margin-left 4vw
            .more
                display flex
                align-items center
                position relative
                left 50vw
                .text
                    font-size 10pt
                    color #7f7f7f
                .icon   
                    font-size 10pt
                    color #7f7f7f
        .server_action
            height 80%
            display flex
            flex-wrap wrap
            align-items center
            justify-content center
            .action
                height 50% 
                width 25%
                text-align center
                .icon
                    font-size 20pt
                    margin-top 10%
                .text
                    font-size 11pt
                    margin-top 10%
    .swiper
        background #fff
        height 20vh
        width 90vw
        margin 5vw
        border-radius 1vh
        .swipe
            height 100%
            width 100%
            .swipe-img
                max-width 100%
                max-height 100%
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