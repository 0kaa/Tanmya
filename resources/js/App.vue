<template>
  <div id="app">
    <Navbar></Navbar>
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
