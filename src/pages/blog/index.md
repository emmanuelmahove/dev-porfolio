---
title: Blog
---

<script setup>
import { data as posts } from './posts.data.ts'
</script>

# Blog

<div class="blog-post-list">
  <div v-for="post in posts" :key="post.url" class="blog-post-card">
    <a :href="post.url">{{ post.frontmatter.title }}</a>
    <p class="blog-post-date">
      {{ new Date(post.frontmatter.date).toLocaleDateString() }}
    </p>
    <p class="blog-post-excerpt">{{ post.frontmatter.description }}</p>
    <hr/>
  </div>
</div>
