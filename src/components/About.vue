<template>
  <div>
    <div class="container flex-column">
      <div class="text-center mb-5">
        <span>
          <h1>About Our Blog</h1>
        </span>
        <p class="text-muted">
          A collaborative space where multiple voices share insights, stories,
          and inspiration.
        </p>
      </div>

      <div class="row mb-5">
        <div class="col-lg-6">
          <span>
            <h3>Our Mission</h3>
          </span>
          <p>
            We aim to bring together diverse perspectives from around the world
            — whether it's tech trends, travel diaries, lifestyle advice, or
            creative tutorials. Our platform empowers bloggers to share their
            expertise and experiences in their own voice.
          </p>
        </div>
      </div>

      <div class="team-section">
        <div class="row g-4">
          <Author />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Author from "./Author.vue";
</script>

<style lang="scss" scoped>
@import "../assets/style/variable.scss";

.container {
  padding: 70px 20px;
  span {
    color: $secondary-font;
  }
}
</style>
