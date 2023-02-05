<template>
  <div>
    <footer class="index_footer">
      <var-bottom-navigation v-model:active="active" @change="handleChange">
        <var-bottom-navigation-item name="home" label="首页" icon="home" />
        <var-bottom-navigation-item name="draw" label="开奖" icon="play-circle" />
        <var-bottom-navigation-item name="mine" label="我的" icon="account-circle" />
      </var-bottom-navigation>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router';

const active = ref("home")
const handleChange = (active) => {
  router.push("/" + active)
}
</script>

<style lang="scss">
.index_footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
}
</style>