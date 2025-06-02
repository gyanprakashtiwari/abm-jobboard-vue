<template>
  <div class="input-group mb-4">
    <button
      class="btn btn-outline-secondary border-end-0"
      type="button"
      style="border-color: #ced4da; padding-right: 0%"
    >
      <img
        src="../assets/icons/mg.png"
        alt="Search"
        style="height: 1.75rem; width: 1.75rem"
      />
    </button>
    <input
      type="text"
      class="form-control border-start-0"
      placeholder="Search jobs..."
      v-model="searchTerm"
      @input="handleSearch"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchTerm = ref("");
const emit = defineEmits(["search"]);

const handleSearch = () => {
  emit("search", searchTerm.value);
};
</script>

<style scoped>
/* Matching border colors */
.btn-outline-secondary {
  border-color: #ced4da;
}

/* Hover state with slightly darker border */
.btn-outline-secondary:hover {
  border-color: #adb5bd;
}

/* Active/focus state */
.btn-outline-secondary:focus,
.btn-outline-secondary:active {
  border-color: #adb5bd;
  box-shadow: none;
}

/* Optional: Add hover effect on icon */
.btn:hover img {
  opacity: 0.8;
}
</style>
