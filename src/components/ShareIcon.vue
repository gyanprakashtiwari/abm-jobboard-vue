<template>
  <div class="position-relative">
    <button class="btn btn-sm btn-icon" @click.stop="toggleShareBox">
      <img
        src="../assets/icons/share.png"
        alt="Share Icon"
        class="share-icon"
      />
    </button>

    <div v-if="showShareBox" class="share-box">
      <div class="share-box-header">
        <span>Share</span>
        <button
          @click.stop="toggleShareBox"
          class="btn-close"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
      <div class="share-options-row">
        <button @click.stop="shareOnFacebook" class="share-option">
          <img src="../assets/icons/facebook.png" alt="Facebook" />
        </button>
        <button @click.stop="shareOnTwitter" class="share-option">
          <img src="../assets/icons/twitter.png" alt="Twitter" />
        </button>
        <button @click.stop="shareOnWhatsApp" class="share-option">
          <img src="../assets/icons/whatsapp.png" alt="WhatsApp" />
        </button>
        <button @click.stop="copyJobLink" class="share-option">
          <img src="../assets/icons/link.png" alt="Copy Link" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});

const showShareBox = ref(false);

const toggleShareBox = () => {
  showShareBox.value = !showShareBox.value;
};

const getJobUrl = () => {
  return `${window.location.origin}/jobs/${props.job.id}`;
};

const shareOnFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    getJobUrl()
  )}`;
  window.open(url, "_blank", "width=600,height=400");
};

const shareOnTwitter = () => {
  const text = `Check out this job: ${props.job.title} at ${props.job.company}`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    text
  )}&url=${encodeURIComponent(getJobUrl())}`;
  window.open(url, "_blank", "width=600,height=400");
};

const shareOnWhatsApp = () => {
  const text = `Check out this job: ${props.job.title} at ${
    props.job.company
  } - ${getJobUrl()}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
};

const copyJobLink = async () => {
  try {
    await navigator.clipboard.writeText(getJobUrl());
    alert("Link copied to clipboard!");
    toggleShareBox();
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
</script>

<style scoped>
.share-icon {
  width: 24px;
  height: 24px;
  opacity: 1;
  transition: opacity 0.2s ease;
}

.btn-icon {
  padding: 0.25rem;
  border: none;
  background: transparent;
}

.btn-icon:hover .share-icon {
  opacity: 1;
}

.share-box {
  position: absolute;
  bottom: 100%;
  right: 0;
  width: 220px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  padding: 12px;
  margin-bottom: 10px;
}

.share-box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
}

.share-options-row {
  display: flex;
  justify-content: space-around;
  gap: 8px;
  flex-wrap: nowrap;
}

.share-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.share-option:hover {
  background-color: #f8f9fa;
}

.share-option img {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
}

.btn-close {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}

.btn-close:hover {
  opacity: 1;
}
</style>
