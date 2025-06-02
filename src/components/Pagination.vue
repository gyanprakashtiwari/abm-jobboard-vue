<template>
  <div class="d-flex justify-content-center mt-4">
    <nav aria-label="Page navigation" v-if="totalPages > 1">
      <ul class="pagination mb-0">
        <li class="page-item" v-if="currentPage !== 1">
          <button
            class="page-link d-flex align-items-center justify-content-center border-0 bg-transparent"
            @click="changePage(currentPage - 1)"
          >
            <img
              src="../assets/icons/previous.png"
              alt="Previous"
              style="height: 18px; width: 18px"
            />
          </button>
        </li>

        <li
          class="page-item"
          v-for="page in pages"
          :key="page"
          :class="{ active: page === currentPage }"
        >
          <button
            class="page-link border-0 bg-transparent"
            @click="changePage(page)"
          >
            {{ page }}
          </button>
        </li>

        <li class="page-item" v-if="currentPage !== totalPages">
          <button
            class="page-link d-flex align-items-center justify-content-center border-0 bg-transparent"
            @click="changePage(currentPage + 1)"
          >
            <img
              src="../assets/icons/next.png"
              alt="Next"
              style="height: 18px; width: 18px"
            />
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  currentPage: Number,
  totalPages: Number,
});

const emit = defineEmits(["page-changed"]);

const pages = computed(() => {
  const range = [];
  for (let i = 1; i <= props.totalPages; i++) {
    range.push(i);
  }
  return range;
});

const changePage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    emit("page-changed", page);
  }
};
</script>

<style scoped>
.page-link {
  padding: 0.5rem 0.75rem;
  min-width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  background-color: transparent !important;
  border: none !important;
}

.page-item.active .page-link {
  border: 1px solid #dee2e6 !important; /* Light gray border */
  color: black;
}

.page-link:hover {
  background-color: transparent !important;
}

.page-link:focus {
  box-shadow: none;
}
</style>
