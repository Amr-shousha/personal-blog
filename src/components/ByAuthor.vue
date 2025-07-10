<template>
  <div class="container card-container">
    <div class="card-1" v-for="post in posts" :key="post.sys.id">
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
import { useRoute } from "vue-router";

const route = useRoute();
const authorId = ref();
const posts = ref();
const client = createClient({
  space: "ahio94xfrxeu",
  accessToken: "-oJhBIwgvlH2yMdzTiMc_RErNlgk84lhQ9QidimEaTs",
});
onMounted(async () => {
  const authorId = route.params.author;
  // Step 1: Fetch all blog posts
  const res = await client.getEntries({ content_type: "pageBlogPost" });

  // Step 2: Filter posts by author ID
  posts.value = res.items.filter(
    (post) => post.fields.author?.sys.id === authorId
  );
});
</script>

<style lang="scss" scoped></style>
