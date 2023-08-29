<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <p v-for="i in [...Array(100).keys()]">{{ i }} {{ route.params.id }}</p>
  <NuxtLink to="/with-param/bar">bar</NuxtLink>
</template>
