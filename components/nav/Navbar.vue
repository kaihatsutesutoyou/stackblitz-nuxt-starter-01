<template>
  <nav>
    <NuxtLink to="/">Home2</NuxtLink> |
    <NuxtLink to="/about">About2</NuxtLink> |
    <NuxtLink to="/sample">sample</NuxtLink> |
    <NuxtLink :to="{ name: 'index' }">index</NuxtLink> |
    <!-- <NuxtLink :to="{ name: 'users-index' }">user index</NuxtLink> | -->
    <NuxtLink to="/users/">user index</NuxtLink> |
    <NuxtLink :to="{ name: 'users-list' }">user list</NuxtLink> |
    <NuxtLink to="/users/list">user list2</NuxtLink> |
    <NuxtLink to="https://google.com" target="_blank">google</NuxtLink> |
    <NuxtLink to="/users/list">user list2</NuxtLink> |
    <NuxtLink to="/plain/">plain index</NuxtLink> |
  </nav>
</template>
