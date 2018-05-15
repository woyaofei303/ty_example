<template>
  <div>
    <router-view name="Header_1"></router-view>
    <router-view name="home"></router-view>
    <router-view name="Footer_1"></router-view>
    <router-view name="leftFloat"></router-view>
    <router-view name="rightFloat"></router-view>
  </div>
</template>

<script>

  import Header from './components/header/header';
  import home from './components/page/home/home';
  import Footer from './components/footer/footer';
  import leftFloat from './components/leftFloat/leftFloat';
  import rightFloat from './components/rightFloat/rightFloat';

  export default {
    name: 'App',
    components: {
      Header,
      home,
      Footer,
      leftFloat,
      rightFloat
    },
  }
</script>

<style lang="scss" scoped>

</style>
