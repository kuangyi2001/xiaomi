<script setup>
  import Tabbar from '@/components/Tabbar.vue'
  import { reactive, onMounted, computed } from 'vue'
  import { useHomeStore } from './store/home'
  import { useRoute } from 'vue-router';

  const state  = reactive({
    show: true,
  })
  const route = useRoute()
  const tabStore = useHomeStore()

  onMounted(async () => {
    state.show = computed(() => tabStore.tabShow)
  })
</script>

<template>
  <router-view v-slot="{Component}">
    <keep-alive>
      <component
        :is="Component"
        :key="route.name"
        v-if="route.meta.keepAlive"
      />
    </keep-alive>
  </router-view>
  <Tabbar v-show="state.show"/>
</template>

<style scoped>

</style>
