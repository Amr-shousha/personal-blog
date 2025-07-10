<template>
  <div>
    <form class="d-flex justify-content-center" @submit.prevent="handleSearch">
      <input v-model="searchQuery" type="text" placeholder=" search . . ." />
    </form>

    <ul>
      <li v-for="item in filteredBlogs" :key="item.sys.id">
        <router-link
          :to="`/article/${item.sys.id}`"
          @click="filteredBlogs = []"
        >
          {{ item.fields.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { createClient } from "contentful";
import { computed, ref, onMounted } from "vue";

const searchQuery = ref("");
const filteredBlogs = ref([]);
const client = createClient({
  space: "ahio94xfrxeu",
  accessToken: "-oJhBIwgvlH2yMdzTiMc_RErNlgk84lhQ9QidimEaTs",
});
const blogs = ref([]);
onMounted(async () => {
  const res = await client.getEntries({ content_type: "pageBlogPost" });
  blogs.value = res.items;
});

function handleSearch() {
  filteredBlogs.value = blogs.value.filter((blog) =>
    blog.fields.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variable.scss";

form {
  margin: 0 10px 0 0;
  input {
    width: 80px;

    border: none;
    padding: 0.2rem 0.8rem;
    border-radius: 1rem;
    background: #e8e8e8;
    box-shadow: 3px 3px 10px #b80909a5, -3px -3px 10px #9e0202;
    transition: all 0.3s ease;
    &:focus {
      width: 400px;

      outline-color: #e8e8e8;
      background: #e8e8e8;
      box-shadow: inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #ffffff;
    }
  }
}
</style>
