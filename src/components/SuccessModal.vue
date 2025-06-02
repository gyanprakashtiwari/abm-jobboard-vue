<template>
  <div class="modal fade show d-block" tabindex="-1" v-if="visible">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Success!</h5>
          <button type="button" class="btn-close" @click="close"></button>
        </div>
        <div class="modal-body">
          <p>Your job posting has been submitted successfully.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="close">
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show" v-if="visible"></div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  visible: Boolean,
});

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
