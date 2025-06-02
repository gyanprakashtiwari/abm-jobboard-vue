<template>
  <button class="btn btn-primary btn-lg" @click="handleApply">Apply Now</button>
</template>

<script setup>
const handleApply = () => {
  alert("Application submitted!");
};
</script>
