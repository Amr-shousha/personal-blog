<template>
  <div class="container flex-column" v-if="post">
    <h2>{{ post.fields.title }}</h2>
    <p>By: {{ post.fields.author.fields.name }}</p>
    <img
      v-if="post.fields.featuredImage"
      :src="`https:${post.fields.featuredImage.fields.file.url}`"
      :alt="post.fields.title"
      width="400"
    />
    <div v-html="htmlContent"></div>
  </div>
  <div v-if="morePosts.length > 0">
    <div class="container card-container">
      <div
        class="card-1 animate__animated animation-1"
        v-for="post in morePosts"
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
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { createClient } from "contentful";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
const htmlContent = ref("");
const client = createClient({
  space: "ahio94xfrxeu",
  accessToken: "-oJhBIwgvlH2yMdzTiMc_RErNlgk84lhQ9QidimEaTs",
});

const post = ref(null);
const morePosts = ref([]);
const route = useRoute();
async function fetchPostData(id) {
  const res = await client.getEntry(id);
  post.value = res;
  htmlContent.value = documentToHtmlString(res.fields.content);

  const res2 = await client.getEntries({ content_type: "pageBlogPost" });
  morePosts.value = res2.items.filter(
    (p) =>
      p.sys.id !== id && p.fields.author?.sys.id === res.fields.author.sys.id
  );
}

onMounted(() => {
  fetchPostData(route.params.id);
});

// ✅ WATCH the route change!
watch(
  () => route.params.id,
  (newId) => {
    fetchPostData(newId);
    window.scrollTo(0, 0);
  }
);
</script>

<style lang="scss" scoped>
.container {
  padding: 60px 50px;

  @media (max-width: 640px) {
    padding: 30px 30px;
  }
}
</style>
