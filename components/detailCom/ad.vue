<template>
    <div>
        <div class="ad">{{ adword[0] }}</div>
        <div class="ad">{{ adword[1] }}</div>
        <div class="ad">{{ adword[2] }}</div>
    </div>
</template>

<script setup>
defineProps({
    adword: {
        type: Array,
        default: []
    }
})
</script>

<style lang="stylus" scoped>
.ad
    width 90vw
    margin-left 5vw
    font-size 10pt
    padding .5vh 0
</style>