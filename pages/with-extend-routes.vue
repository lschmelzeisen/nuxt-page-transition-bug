<script setup lang="ts">
const route = useRoute();
const id = route.path.slice("/with-extend-routes/".length);
</script>

<template>
  <p>
    <NuxtLink to="/">Index</NuxtLink>
  </p>

  <p v-for="i in [...Array(100).keys()]">{{ i }} {{ id }}</p>

  <p>
    <NuxtLink to="/with-extend-routes/bar">
      <code>/with-extend-routes/bar</code>
    </NuxtLink>
  </p>
</template>
