<template>
  <NuxtLayout name="base">
    <h1> {{ rivers.title }}</h1>
    <div class="my-5">
      <div class="text-center mb-20">
        <img :src="rivers.image" alt="" class="img-fluid" style="width: 500px; height: 500px; object-fit: cover;">
      </div>
      <p>Description: {{ rivers.description }}</p>
      <p>Length: {{ rivers.length }}</p>
      <p>Continent: {{ rivers.continent }}</p>
    </div>
  </NuxtLayout>
</template>

<script setup>
  const route = useRoute()
  const { data: rivers } = await useFetch(
  `https://api.nuxtjs.dev/rivers/${route.params.slug}`
  )
</script>