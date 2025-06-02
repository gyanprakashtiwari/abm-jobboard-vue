<template>
  <div class="card border-0">
    <div class="card-body p-0">
      <!-- Added p-0 class here -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="card-title mb-0">{{ job.title }}</h2>
        <h4 class="card-subtitle text-muted mb-0">{{ job.postDate }}</h4>
      </div>
      <h4 class="card-subtitle mb-3 text-muted">{{ job.company }}</h4>
      <div class="d-flex align-items-center gap-2 mb-3">
        <span class="badge bg-light text-dark">{{ job.type }}</span>
        <span class="text-muted fw-semibold">
          {{ job.location }}{{ job.state ? `, ${job.state}` : "" }}
        </span>
      </div>
      <div class="card-text" v-html="formattedDescription"></div>
    </div>
  </div>
 
  
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});

const formattedDescription = computed(() => {
  return props.job.fullDescription.replace(/\n/g, "<br>");
});
</script>
