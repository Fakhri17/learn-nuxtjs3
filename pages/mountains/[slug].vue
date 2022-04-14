<template>
  <NuxtLayout name="base">
    <h1> {{ mountain.title }}</h1>
    <div class="my-5">
      <div class="text-center mb-20">
        <img :src="mountain.image" alt="" class="img-fluid">
      </div>
      <p>Description: {{ mountain.description }}</p>
      <p>Height: {{ mountain.height }}</p>
      <p>Country: {{ mountain.countries[0] }}, {{ mountain.continent }}</p>
    </div>
  </NuxtLayout>
</template>

<script setup>
   const route = useRoute()
   const { data: mountain } = await useFetch(
    `https://api.nuxtjs.dev/mountains/${route.params.slug}`
   )
   console.log(mountain)
   console.log(route.params.slug)
</script>