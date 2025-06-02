<template>
  <div class="mt-4">
    <div class="row">
      <SearchBar @search="handleSearch" />
    </div>
    <div class="row">
      <div class="col-md-3 col-12">
        <div class="mb-3">
          <h5 class="fw-semibold">Filters</h5>
        </div>
        <JobFilterSidebar @update-filters="handleFilterChange" />
      </div>
      <div class="col-md-9 col-12 job-content">
        <div class="mb-3">
          <h5 class="fw-semibold">Jobss</h5>
        </div>

        <div v-if="filteredJobs.length > 0">
          <JobCard v-for="job in paginatedJobs" :key="job.id" :job="job" />
        </div>
        <div v-else class="alert alert-info">
          No jobs found matching your criteria.
        </div>
        <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-changed="changePage"
        />
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useJobsStore } from "../store/jobs";
import JobCard from "../components/JobCard.vue";
import SearchBar from "../components/SearchBar.vue";
import JobFilterSidebar from "../components/JobFilterSidebar.vue";
import Pagination from "../components/Pagination.vue";

const jobsStore = useJobsStore();
const searchTerm = ref("");
const currentPage = ref(1);
const jobsPerPage = 5;
const selectedTypes = ref([]);
const selectedLocations = ref([]);

const handleFilterChange = (filters) => {
  selectedTypes.value = filters.types;
  selectedLocations.value = filters.locations;
  currentPage.value = 1;
};

const filteredJobs = computed(() => {
  return jobsStore.jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.value.toLowerCase());

    const matchesJobType =
      selectedTypes.value.length === 0 ||
      selectedTypes.value.includes(job.type);

    const matchesLocation =
      selectedLocations.value.length === 0 ||
      selectedLocations.value.includes(job.location);

    return matchesSearch && matchesJobType && matchesLocation;
  });
});

const totalPages = computed(() => {
  return Math.ceil(filteredJobs.value.length / jobsPerPage);
});

const paginatedJobs = computed(() => {
  const start = (currentPage.value - 1) * jobsPerPage;
  const end = start + jobsPerPage;
  return filteredJobs.value.slice(start, end);
});

const handleSearch = (term) => {
  searchTerm.value = term;
  currentPage.value = 1;
};

const changePage = (page) => {
  currentPage.value = page;
};
</script>

<style scoped>
/* Optional: Add custom styling if needed */
.job-content {
  /* No border or padding on mobile by default */
  border-left: none;
  /* padding-left: 0; */
}

/* For screen width 768px and above (md+) */
@media (min-width: 768px) {
  .job-content {
    border-left: 1px solid #dee2e6; /* Matches Bootstrap's border color */
    padding-left: 1.5rem; /* Equivalent to Bootstrap's ps-4 */
  }
}

/* Footer space styling */
.footer-space {
  margin-bottom: 2rem;
}
</style>
