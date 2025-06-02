<template>
  <div class="mt-4" v-if="job">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <JobDescription :job="job" />
        <div class="d-flex justify-content-end mt-4">
          <ApplyButton />
        </div>
      </div>
    </div>
  </div>

  <div v-else class="mt-4">
    <div class="alert alert-danger border-0">Job not found</div>
    <router-link to="/" class="btn btn-outline-secondary border-0"
      >Back to Jobs</router-link
    >
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useJobsStore } from "../store/jobs";
import JobDescription from "../components/JobDescription.vue";
import ApplyButton from "../components/ApplyButton.vue";

const route = useRoute();
const jobsStore = useJobsStore();

const job = computed(() => jobsStore.getJobById(route.params.id));
</script>
