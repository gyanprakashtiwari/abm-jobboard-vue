<template>
  <div class="card mb-4 border-0">
    <div class="card-body p-0">
      <div class="mb-3 ms-0 ps-0">
        <h6 class="ms-0 ps-0">Location</h6>
        <div
          class="form-check ms-0 ps-0"
          v-for="location in locations"
          :key="location"
        >
          <input
            class="form-check-input ms-0 me-2"
            type="checkbox"
            :id="'loc-' + location"
            :value="location"
            v-model="selectedLocations"
            @change="emitFilters"
          />
          <label class="form-check-label ms-0" :for="'loc-' + location">{{
            location
          }}</label>
        </div>
      </div>
      <div class="mb-3 ms-0 ps-0">
        <h6 class="ms-0 ps-0">Job Type</h6>
        <div class="form-check ms-0 ps-0" v-for="type in jobTypes" :key="type">
          <input
            class="form-check-input ms-0 me-2"
            type="checkbox"
            :id="'type-' + type"
            :value="type"
            v-model="selectedTypes"
            @change="emitFilters"
          />
          <label class="form-check-label ms-0" :for="'type-' + type">{{
            type
          }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const jobTypes = ["Full-time", "Part-time", "Remote"];
const locations = ["Bangalore", "Noida", "Gurgaon"];

const selectedTypes = ref([]);
const selectedLocations = ref([]);

const emit = defineEmits(["update-filters"]);

const emitFilters = () => {
  emit("update-filters", {
    types: selectedTypes.value,
    locations: selectedLocations.value,
  });
};
</script>
