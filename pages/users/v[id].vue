<template>
  <div>
    <p>ユーザID: {{ Number($route.params.id) + 100 }}</p>
    <p>ユーザID: {{ $route.params.id + 100 }}</p>
  </div>
</template>
