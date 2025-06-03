<template>
  <div class="card mb-4 border-0">
    <div class="card-body p-0">
      <!-- Location Filter with Dropdown -->
      <div class="filter-section">
        <div
          class="d-flex justify-content-between align-items-center filter-header"
          @click="toggleLocationDropdown"
        >
          <h6 class="ms-0 ps-0 mb-0">Location</h6>
          <img
            :src="locationDropdownOpen ? upArrow : downArrow"
            alt="Toggle"
            class="dropdown-icon"
          />
        </div>
        <div v-show="locationDropdownOpen" class="filter-options">
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
      </div>

      <!-- Job Type Filter with Dropdown -->
      <div class="filter-section">
        <div
          class="d-flex justify-content-between align-items-center filter-header"
          @click="toggleTypeDropdown"
        >
          <h6 class="ms-0 ps-0 mb-0">Job Type</h6>
          <img
            :src="typeDropdownOpen ? upArrow : downArrow"
            alt="Toggle"
            class="dropdown-icon"
          />
        </div>
        <div v-show="typeDropdownOpen" class="filter-options">
          <div
            class="form-check ms-0 ps-0"
            v-for="type in jobTypes"
            :key="type"
          >
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import downArrow from "../assets/icons/down-arrow.png"; // Update with your actual path
import upArrow from "../assets/icons/up-arrow.png"; // Update with your actual path

const jobTypes = ["Full-time", "Part-time", "Remote"];
const locations = ["Bangalore", "Noida", "Gurgaon"];

const selectedTypes = ref([]);
const selectedLocations = ref([]);
const locationDropdownOpen = ref(true); // Start open by default
const typeDropdownOpen = ref(true); // Start open by default

const emit = defineEmits(["update-filters"]);

const emitFilters = () => {
  emit("update-filters", {
    types: selectedTypes.value,
    locations: selectedLocations.value,
  });
};

const toggleLocationDropdown = () => {
  locationDropdownOpen.value = !locationDropdownOpen.value;
};

const toggleTypeDropdown = () => {
  typeDropdownOpen.value = !typeDropdownOpen.value;
};
</script>

<style scoped>
.filter-header {
  cursor: pointer;
  padding: 0.5rem 0;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.filter-options {
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
}

.form-check {
  padding: 0.25rem 0;
}

.form-check-input {
  cursor: pointer;
}

.form-check-label {
  cursor: pointer;
}

.filter-section {
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 0.5rem;
  margin-bottom: 0.75rem;
}

.filter-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>
