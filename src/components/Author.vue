<template>
  <div class="container card-container">
    <div class="w-100 d-flex justify-content-center">
      <span> <h1 class="mb-3">Meet Our Bloggers</h1> </span>
    </div>
    <div
      class="card-1 animate__animated animation-1"
      v-for="author in authors"
      :key="author.sys.id"
    >
      <router-link :to="`/byauthor/${author.fields.author.sys.id}`">
        <div class="card-1 d-flex flex-column align-items-center">
          <h3 class="position-relative z-1">
            {{ author.fields.author.fields.name }}
          </h3>
          <img
            class="position-absolute z-0 top-0 hover-1"
            :src="`https:${author.fields.author.fields.avatar.fields.file.url}`"
            alt=""
          />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { createClient } from "contentful";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const client = createClient({
  space: "ahio94xfrxeu",
  accessToken: "-oJhBIwgvlH2yMdzTiMc_RErNlgk84lhQ9QidimEaTs",
});
const authors = ref([]);
onMounted(async () => {
  const res = await client.getEntries({ content_type: "pageBlogPost" });
  authors.value = res.items;
  // console.log(res.items[0].fields);
});
</script>

<style lang="scss" scoped>
@import "../assets/style/variable.scss";

.card-1 {
  // background-color: rgb(176, 20, 20) !important;
  // padding-bottom: 0px !important;
  height: 300px !important;
  width: 20% !important;

  router-link,
  router-link h3 {
    text-decoration: none !important;
    color: inherit; /* optional */
  }
}

.container {
  span {
    color: $secondary-font;
  }
}
</style>
