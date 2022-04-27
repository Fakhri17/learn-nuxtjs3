<template>
<NuxtLayout name="base">
  <h1> {{ planets.title }}</h1>
  <div class="my-5">
    <div class="text-center mb-20">
      <img :src="planets.image" alt="" class="img-fluid" style="width: 500px; height: 500px; object-fit: cover;">
    </div>
    <p>Description: {{ planets.description }}</p>
    <p v-if="planets.distanceFromSun">Distance from sun: {{ planets.distanceFromSun }}</p>
    <p>Radius: {{ planets.radius }}</p>
  </div>
</NuxtLayout>
</template>

<script setup>
  const route = useRoute()
  const { data: planets } = await useFetch(
  `https://api.nuxtjs.dev/planets/${route.params.slug}`
  )
</script>