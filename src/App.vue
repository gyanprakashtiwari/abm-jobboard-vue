<template>
  <header
    class="position-fixed top-0 start-0 w-100 bg-white z-3"
    style="height: 81px"
  >
    <nav class="navbar navbar-expand-lg navbar-light bg-white border shadow-sm">
      <div class="container">
        <router-link to="/" class="navbar-brand text-dark">
          <h1>Job Board</h1>
        </router-link>

        <!-- Toggle button for mobile -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapsible menu items -->
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link text-dark"
                >Browse Jobs</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/post-job" class="nav-link text-dark"
                >Post a Job</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <body class="job-section-background">
    <div class="container pt-5" style="margin-top: 81px">
      <!-- <div class=""> -->
      <router-view></router-view>
      <!-- </div> -->
    </div>
  </body>

  <!-- Footer space added here -->
  <footer>
    <div class="footer-space mt-5 py-4">
      <div class="text-center text-muted small">
        <!-- © 2025 Job Board. All rights reserved. -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.nav-link {
  font-weight: 500;
}

.nav-link.router-link-exact-active {
  color: var(--bs-primary) !important;
  font-weight: 600;
}
.job-section-background {
  background-color: rgb(239, 247, 255);
}
.body {
  background-color: rgb(239, 247, 255) !important;
}
</style>
