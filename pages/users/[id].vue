<template>
  <div>
    <p>ユーザID: {{ $route.params.id }}</p>
    <p>ユーザID: {{ router.params.id }}</p>
  </div>
</template>

<script setup lang="ts">
const router = useRoute();

console.log(router.params.id);
console.log(router.params.ID); //undefined(データなし＝大小の区別あり)

// console.log($route.params.id); //エラー
</script>
