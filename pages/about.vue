<template>
  <h1 class="btn-blue">About Page</h1>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: defineNuxtRouteMiddleware((to, from) => {
    console.log('a-from', from.fullPath);
    console.log('a-to', to.fullPath);
  }),
});
</script>
