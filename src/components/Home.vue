<template>
  <div class="d-flex flex-column">
    <div class="container hero">
      <h1 class="animate__animated animate__slideInDown">
        Discover Stories, Ideas, and Inspiration
      </h1>
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
h1 {
  color: rgb(255, 255, 255);
}
</style>
