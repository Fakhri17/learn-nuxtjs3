<template>
  <NuxtLayout name="base">
    <h1 class="mb-5"> Rivers List</h1>
    <div class="row">
      <div v-for="(item, key) in rivers" :key="key" class="col-lg-4 col-sm-6 col-12 d-flex align-items-stretch">
        <div class="w-400 mw-full">
          <div class="card p-0">
            <img :src="item.image" class="img-fluid rounded-top" alt="..." style="object-fit: cover;">
            <!-- rounded-top = rounded corners on the top -->
            <div class="content">
              <h2 class="content-title">
                {{ item.title }}
              </h2>
              <p class="text-muted">
                {{ item.description.substring(0, 100) }}...
              </p>
              <div class="text-right">
                <NuxtLink :to="item.path">
                  See detail
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
 const { data: rivers } = await useFetch(
    'https://api.nuxtjs.dev/rivers'
  )
</script>