<template>
  <div>
    <NuxtLayout name="default">
      <template #footer>フッター</template>
      <template #header>ヘッダー</template>
      <h1>Main Page</h1>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
