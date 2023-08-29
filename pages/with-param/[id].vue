<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <p>
    <NuxtLink to="/">Index</NuxtLink>
  </p>

  <p v-for="i in [...Array(100).keys()]">{{ i }} {{ route.params.id }}</p>

  <p>
    <NuxtLink to="/with-param/bar"><code>/with-param/bar</code></NuxtLink>
  </p>
</template>
