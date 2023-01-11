<template>
  <p>ユーザID: {{ Number($route.params.id) + 100 }}</p>
  <p>ユーザID: {{ $route.params.id + 100 }}</p>
</template>
