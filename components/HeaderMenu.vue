<template>
  <nav class="navbar">
    <div class="navbar-content">
      <button id="toggle-sidebar-btn" class="btn btn-action" type="button" onclick="halfmoon.toggleSidebar()">
        <i class="bi bi-list"></i>
      </button>
    </div>
    <a href="#" class="navbar-brand ml-10 ml-sm-20">
      <span class="d-none d-sm-flex">Brand</span>
    </a>
    <div class="navbar-content ml-auto">
      <button class="btn btn-action mr-5" type="button" @click="switchDark">
        <i :class="darkMode ? 'bi bi-sun-fill' : 'bi bi-moon' " id="a" ></i>
        <span class="sr-only">Toggle dark mode</span>
      </button>
      <a href="#" class="btn btn-primary" role="button">Get started</a>
    </div>
  </nav>

  <div class="sidebar-overlay" @click="toggleSidebar"></div>
  <div class="sidebar">
    <button id="toggle-sidebar-btn" class="btn btn-action m-5" type="button" @click="toggleSidebar">
      <i class="bi bi-x-lg"></i>
    </button>
    <div class="sidebar-menu">
      <div class="sidebar-content">
        <input type="text" class="form-control" placeholder="Search">
        <div class="mt-10 font-size-12">
          Press <kbd>/</kbd> to focus
        </div>
      </div>
      <h5 class="sidebar-title">Getting started</h5>
      <div class="sidebar-divider"></div>
      <a href="#" class="sidebar-link sidebar-link-with-icon active">
        <span class="sidebar-icon">
          <i class="fa fa-code"></i>
        </span>
        Installation
      </a>
      <a href="#" class="sidebar-link sidebar-link-with-icon">
        <span class="sidebar-icon">
          <i class="fa fa-terminal"></i>
        </span>
        CLI commands
      </a>
    </div>
  </div>
</template>

<script setup>
  let darkMode = false;
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode = true;
  }

  if (localStorage.getItem('theme') === 'dark') {
     darkMode = true;
  } 
  else if (localStorage.getItem('theme') === 'light') {
    darkMode = false;
  }

  if (darkMode) {
    document.body.classList.toggle('dark-mode');
  }

  const switchDark = () => {  
    halfmoon.toggleDarkMode()

    if(document.body.classList.contains('dark-mode')){
      document.getElementById("a").classList.add('bi-sun-fill')
      document.getElementById("a").classList.remove('bi-moon')
    }
    else{
      document.getElementById("a").classList.add('bi-moon')
      document.getElementById("a").classList.remove('bi-sun-fill')
    }

    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    
  }
  const toggleSidebar = () => halfmoon.toggleSidebar()
</script>