<template>
  <div>
    <h1>User Indexページ</h1>
    <ul>
      <li><NuxtLink to="list">user list</NuxtLink></li>
      <li>
        <NuxtLink :to="id">{{ id }}</NuxtLink> |
        <input type="text" v-model="id" />
      </li>
      <li>
        <NuxtLink :to="'v' + id">{{ 'v' + id }}</NuxtLink> |
        <input type="text" v-model="id" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const id = ref('0');
</script>
