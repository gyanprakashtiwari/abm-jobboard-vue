<template>
  <div class="mt-4">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2 class="mb-4">Post a Job</h2>
        <JobForm @submit="handleSubmit" />
      </div>
    </div>

    <SuccessModal :visible="showSuccess" @close="showSuccess = false" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useJobsStore } from "../store/jobs";
import JobForm from "../components/JobForm.vue";
import SuccessModal from "../components/SuccessModal.vue";

const router = useRouter();
const jobsStore = useJobsStore();
const showSuccess = ref(false);

const handleSubmit = (formData) => {
  jobsStore.addJob({
    ...formData,
    fullDescription: formData.description,
  });
  showSuccess.value = true;
  setTimeout(() => {
    router.push("/");
  }, 2000);
};
</script>
