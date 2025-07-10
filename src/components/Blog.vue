<template>
  <div class="container card-container">
    <div class="w-100 d-flex justify-content-center">
      <span> <h1 class="mb-3">Ideas Worth Sharing</h1> </span>
    </div>
    <div
      class="card-1 animate__animated animation-1"
      v-for="post in posts"
      :key="post.sys.id"
    >
      <router-link :to="`/article/${post.sys.id}`">
        <div>
          <h4>{{ post.fields.title }}</h4>
          <p>{{ post.fields.shortDescription }}</p>
          <p><span>By : </span>{{ post.fields.author.fields.name }}</p>
          <p class="date">
            <span>Date :</span> {{ post.fields.publishedDate }}
          </p>
        </div>

        <img
          class="hover-1"
          v-if="post.fields.featuredImage"
          :src="`https:${post.fields.featuredImage.fields.file.url}`"
          :alt="post.fields.title"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { createClient } from "contentful";
import { ref, onMounted } from "vue";

const client = createClient({
  space: "ahio94xfrxeu",
  accessToken: "-oJhBIwgvlH2yMdzTiMc_RErNlgk84lhQ9QidimEaTs",
});
const posts = ref([]);
onMounted(async () => {
  const res = await client.getEntries({ content_type: "pageBlogPost" });
  posts.value = res.items;
  console.log(res.items[0].fields); // طبع الحقول الرئيسية
  if (res.items[0].fields.image) {
    console.log(res.items[0].fields.image.fields.file.url);
  } else {
    console.log("No image found in this item");
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/style/variable.scss";

.container {
  span {
    color: $secondary-font;
  }
}
</style>
