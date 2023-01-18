<template>
  <NuxtLayout name="users">
    <template #footer>フッター</template>
    <template #header>ヘッダー</template>
    <h1>Usersページ</h1>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>
