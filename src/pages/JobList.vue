<template>
  <div class="py-4">
    <div class="row mb-4">
      <h1 class="mb-3 fw-bold">Job Opportunities</h1>
      <p>
        Explore exciting job opportunities at ABM, where innovation meets
        growth. Join our team to work on impactful projects and unlock your
        career potential! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Magnam vero consequuntur cupiditate cumque saepe natus facilis!
        Optio dignissimos veritatis sunt accusantium. Repudiandae nobis officia,
        praesentium assumenda deserunt ea cupiditate magnam?
      </p>
    </div>

    <div class="row">
      <!-- Filter Section -->
      <div class="col-md-3 col-12 pe-md-3">
        <div
          class="bg-white rounded-3 shadow-sm p-3 mb-3"
          style="height: fit-content"
        >
          <!-- Added fit-content here -->
          <div class="mb-3">
            <h5 class="fw-semibold">Filters</h5>
          </div>
          <div class="pb-3">
            <SearchBar @search="handleSearch" />
          </div>
          <JobFilterSidebar @update-filters="handleFilterChange" />
        </div>
      </div>

      <!-- Jobs Section -->
      <div class="col-md-9 col-12">
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
      searchTerm.value === "" ||
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
.bg-white {
  background-color: white;
}

.rounded-3 {
  border-radius: 0.5rem !important;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.filter-container {
  height: fit-content;
}
</style>
