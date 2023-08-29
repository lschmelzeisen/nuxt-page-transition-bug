<script setup lang="ts">
const route = useRoute();
const id = route.path.slice("/with-extend-routes/".length);
</script>

<template>
  <p v-for="i in [...Array(100).keys()]">{{ i }} {{ id }}</p>
  <NuxtLink to="/with-extend-routes/bar">bar</NuxtLink>
</template>
