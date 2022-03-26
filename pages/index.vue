<template>
  <div class="py-20">
    <h1 class="text-center mb-5">Learn NuxtJs 3</h1>
    <div class="row">
      <div class="col-lg-4 col-sm-6 col-12 d-flex align-items-stretch">
        <div class="w-400 mw-full">
          <div class="card p-0">
            <img src="https://via.placeholder.com/600x400" class="img-fluid rounded-top" alt="...">
            <!-- rounded-top = rounded corners on the top -->
            <div class="content">
              <h2 class="content-title">
                List of rivers
              </h2>
              <p class="text-muted">
                List of rivers from api.nuxtjs.dev/rivers
              </p>
              <div class="text-right">
                <NuxtLink to="/rivers">
                  Go to list
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-sm-6 col-12 d-flex align-items-stretch">
        <div class="w-400 mw-full">
          <div class="card p-0">
            <img src="https://via.placeholder.com/600x400" class="img-fluid rounded-top" alt="...">
            <!-- rounded-top = rounded corners on the top -->
            <div class="content">
              <h2 class="content-title">
                List of mountains
              </h2>
              <p class="text-muted">
                List of mountains from api.nuxtjs.dev/mountains
              </p>
              <div class="text-right">
               <NuxtLink to="/mountains">
                  Go to list
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-sm-6 col-12 d-flex align-items-stretch">
        <div class="w-400 mw-full">
          <div class="card p-0">
            <img src="https://via.placeholder.com/600x400" class="img-fluid rounded-top" alt="...">
            <!-- rounded-top = rounded corners on the top -->
            <div class="content">
              <h2 class="content-title">
                List of planets
              </h2>
              <p class="text-muted">
                List of planets from api.nuxtjs.dev/planets
              </p>
              <div class="text-right">
                <NuxtLink to="/planets">
                  Go to list
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
  definePageMeta({
    layout: "base",
  });
</script>