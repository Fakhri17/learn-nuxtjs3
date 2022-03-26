<template>
  <h1> {{ $route.params.slug }}</h1>
</template>

<script setup>
  definePageMeta({
    layout: "base",
  });
</script>