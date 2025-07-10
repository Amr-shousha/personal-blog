<template>
  <div class="d-flex flex-column">
    <div class="container hero animate__animated animate__slideInDown">
      <h1>Discover Stories, Ideas, and Inspiration</h1>
    </div>
    <Articles />

    <About />
  </div>
</template>

<script setup>
import About from "./About.vue";
import Articles from "./Blog.vue";
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 600px;
  background-image: url(../assets/imgs/vintage.webp);
  background-attachment: fixed;

  h1 {
    color: rgb(255, 255, 255);
  }
}
</style>
