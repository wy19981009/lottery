<template>
  <div class="index">
    <nav></nav>
    <main>
      <router-view></router-view>
    </main>
    <footer class="index_footer">
      <var-bottom-navigation v-model:active="active">
        <var-bottom-navigation-item name="home" label="首页" icon="home" />
        <var-bottom-navigation-item name="draw" label="开奖" icon="play-circle" />
        <var-bottom-navigation-item name="mine" label="我的" icon="account-circle" />
      </var-bottom-navigation>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref("home")
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