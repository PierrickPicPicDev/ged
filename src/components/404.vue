<template>
  <div id="notFound">
    <img :src="`${publicPath}img/logo.png`" class="center-block logo">

    <div class="text-center col-sm-12">
      <h1>You are lost.</h1>
      <h4>This page doesn't exist.</h4>
      <router-link to="/" class="vertical-5p lead">Take me home.</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data: () => ({
    publicPath: process.env.BASE_URL,
  }),
};
</script>

<style>
#notFound {
  padding: 10em;
  color: white;
}
</style>
