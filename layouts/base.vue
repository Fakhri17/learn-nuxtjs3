<template>
  <div id="page-wrapper" class="page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom with-transitions"
    data-sidebar-type="overlayed-all" data-sidebar-hidden="hidden">
   <client-only>
     
    <HeaderMenu/>
    <div class="content-wrapper">
      <div class="container">
        <slot />
      </div>
    </div>
    <FooterMenu/>
  </client-only>
  </div>
</template>