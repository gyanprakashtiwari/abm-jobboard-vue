<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>

    <input
      v-if="type !== 'textarea' && type !== 'select'"
      :type="type || 'text'"
      class="form-control"
      :id="id"
      :required="required"
      v-model="modelValue"
    />

    <textarea
      v-else-if="type === 'textarea'"
      class="form-control"
      :id="id"
      :required="required"
      v-model="modelValue"
      rows="3"
    ></textarea>

    <select
      v-else-if="type === 'select'"
      class="form-select"
      :id="id"
      :required="required"
      v-model="modelValue"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>

    <div v-if="error" class="invalid-feedback d-block">{{ error }}</div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  id: String,
  type: {
    type: String,
    default: "text",
  },
  required: Boolean,
  options: Array,
  error: String,
});

const modelValue = defineModel();
</script>
