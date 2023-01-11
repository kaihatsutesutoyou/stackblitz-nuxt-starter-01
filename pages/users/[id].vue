<template>
  <p>ユーザID: {{ $route.params.id }}</p>
  <p>ユーザID: {{ router.params.id }}</p>
</template>

<script setup>
const router = useRoute();

console.log(router.params.id);
console.log(router.params.ID); //undefined(データなし＝大小の区別あり)

// console.log($route.params.id); //エラー
</script>
