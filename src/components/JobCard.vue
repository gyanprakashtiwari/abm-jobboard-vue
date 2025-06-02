<template>
  <div class="card mb-3 job-card" @click="navigateToJob">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="card-title">{{ job.title }}</h5>
        <h6 class="card-subtitle text-muted">{{ job.postDate }}</h6>
      </div>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ job.company }}
      </h6>
      <p class="card-text">{{ job.description }}</p>
      <div class="d-flex gap-2 align-items-center">
        <span class="badge bg-light text-dark">{{ job.type }}</span>
        <h6 class="card-subtitle mb-0 text-muted">
          {{ job.location }}{{ job.state ? `, ${job.state}` : "" }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const navigateToJob = () => {
  router.push(`/jobs/${props.job.id}`);
};
</script>

<style scoped>
.job-card {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.job-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
