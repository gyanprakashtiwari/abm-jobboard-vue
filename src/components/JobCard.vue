<template>
  <div class="card mb-3 job-card" @click="navigateToJob">
    <div class="card-body p-4">
      <!-- Increased padding -->
      <div class="d-flex justify-content-between align-items-start mb-3">
        <!-- Added margin-bottom -->
        <div>
          <h5 class="card-title mb-1">{{ job.title }}</h5>
          <!-- Added margin-bottom -->
          <h6 class="card-subtitle text-muted">{{ job.company }}</h6>
        </div>
        <span class="badge bg-light text-muted">{{ job.postDate }}</span>
        <!-- Changed to badge -->
      </div>

      <div class="d-flex flex-wrap gap-5 mb-3 text-muted">
        <!-- Changed to flex-wrap with gap -->
        <div class="d-flex align-items-center">
          <img
            src="../assets/icons/location.png"
            alt="Location Icon"
            class="icon me-2"
          />
          <span>{{ job.location }}{{ job.state ? `, ${job.state}` : "" }}</span>
        </div>
        <div class="d-flex align-items-center">
          <img
            src="../assets/icons/experience.png"
            alt="Experience Icon"
            class="icon me-2"
          />
          <span>{{ job.experienceRequired }}</span>
        </div>
        <div class="d-flex align-items-center">
          <img
            src="../assets/icons/jobtype.png"
            alt="Job Type Icon"
            class="icon me-2"
          />
          <span>{{ job.type }}</span>
        </div>
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
  border-radius: 8px !important;
  border: 1px solid #e9ecef;
}

.job-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 18px;
  height: 18px;
  opacity: 0.7;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #212529;
}

.card-subtitle {
  font-size: 0.9rem;
}

.badge {
  font-size: 0.8rem;
  padding: 0.35em 0.65em;
  font-weight: 500;
}

@media (max-width: 768px) {
  .card-body {
    padding: 1.25rem;
  }

  .d-flex.flex-wrap {
    gap: 1rem !important;
    row-gap: 0.5rem !important;
  }
}
</style>
