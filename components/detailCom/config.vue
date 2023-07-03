<template>
    <div class="config">
                <div class="box">
                    <div class="img">
                        <img src="@/assets/config-a.svg">
                    </div>
                    <div class="text">CPU</div>
                    <div class="text">{{ config[0] }}</div>
                </div> 
                <div class="box">
                    <div class="img">
                        <img src="@/assets/config-b.svg">
                    </div>
                    <div class="text">摄像头</div>
                    <div class="text">{{ config[1] }}</div>
                </div> 
                <div class="box">
                    <div class="img">
                        <img src="@/assets/config-c.svg">
                    </div>
                    <div class="text">超大屏</div>
                    <div class="text">{{ config[2] }}</div>
                </div> 
                <div class="box">
                    <div class="img">
                        <img src="@/assets/config-d.svg">
                    </div>
                    <div class="text">分辨率</div>
                    <div class="text">{{ config[3] }}</div>
                </div> 
            </div>
</template>

<script setup>
defineProps({
    config: {
        type: Array,
        default: []
    }
})
</script>

<style lang="stylus" scoped>
.config
    height 15vh
    display flex
    align-items center
    justify-content center
    border-top 1px solid #eee
    .box
        flex 1
        text-align center
    .img
        height 5vw
        width 5vw
        margin-left 10vw
        img
            max-width 100%
    .text
        font-size 10pt
        padding .2vh
</style>