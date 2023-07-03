<template>
    <div class="comment_container">
        <div class="comment_card" v-for="comment in commentList" :key="id">
            <div class="card">
                <div class="user">
                    <div class="user_avater">
                        <img :src="comment.avatar">
                    </div>
                    <div class="user_name">{{ comment.userName }}</div>
                    <div class="user_profile">
                        <van-icon name="ellipsis"/>
                    </div>
                </div>
                <div class="comment">
                    <div class="text">
                        {{ comment.comment }}
                    </div>
                    <div class="img">
                        <img :src="comment.image">
                    </div>
                </div>
                <div class="product">
                    <div class="img">
                        <img :src="comment.product.image">
                    </div>
                    <div class="name">
                        {{ comment.product.name }}
                    </div>
                </div>
                <div class="answer">
                    <div class="name">{{ comment.answer.name }}：</div>
                    <div class="text">{{ comment.answer.comment }}</div>
                </div>
                <div class="action">
                    <div class="icon">
                        <van-icon name="share-o"></van-icon>
                    </div>
                    <div class="icon">
                        <van-icon name="chat-o">{{ comment.answerNum }}</van-icon>
                    </div>
                    <div class="icon">
                        <van-icon name="good-job-o">{{ comment.like }}</van-icon>
                    </div>
                </div>
            </div>
            <div style="height: 1.5vh;"></div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    commentList: {
        type: Array,
        default: []
    }
})
</script>

<style lang="stylus" scoped>
.comment_container
    height 91vh
    width 99vw
    overflow hidden
    overflow scroll
.comment_card
    background #F6F6F6
    .card
        width 100%
        background #fff
        .user
            width 100%
            height 5vh
            margin 10px
            display flex
            align-items center
            .user_avater
                height 4vh
                width 4vh
                img
                    max-width 100%
                    max-height 100%
            .user_name
                margin 0 1vh
                font-size 10pt
            .user_profile
                position relative
                right -60vw
        .comment
            width 90%
            .text
                width 100%
                line-height 25px
                margin 15px
            .img
                width 50%
                border-radius 5%
                margin 15px
                overflow hidden
                img
                    max-width 100%
                    max-height 100%
        .product
            width 30vw
            background #F6F6F6
            display flex
            align-items center
            margin 0 15px
            .img
                height 3vh
                width 3vh
                margin 0 5px
                img
                    max-width 100%
                    max-height 100%
            .name
                color #626262
                padding 5px 0
        .answer
            background #f6f6f6
            margin 15px
            display flex
            padding: 10px
            .name
               color #626262
        .action
            height 4vh
            display flex
            .icon
                flex 1
                text-align center
                color #626262
                font-size 14pt
</style>