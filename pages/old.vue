<template>
  <NuxtLayout name="default">
    <template #footer>フッター</template>
    <template #header>ヘッダー</template>
    <h1>Main Page</h1>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>
