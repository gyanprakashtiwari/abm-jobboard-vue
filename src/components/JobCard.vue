<template>
  <div class="card mb-3 job-card" @click="navigateToJob">
    <div class="card-body p-4">
      <div class="d-flex justify-content-between align-items-start mb-3">
        <div>
          <h5 class="card-title mb-1">{{ job.title }}</h5>
          <h6 class="card-subtitle text-muted">{{ job.company }}</h6>
        </div>
        <div class="position-relative">
          <button class="btn btn-sm btn-icon" @click.stop="toggleShareBox">
            <img
              src="../assets/icons/share.png"
              alt="Share Icon"
              class="share-icon"
            />
          </button>

          <!-- Share Box (Top Right) -->
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
      </div>

      <div class="d-flex flex-wrap gap-5 mb-3 text-muted">
        <div class="d-flex align-items-center">
          <img
            src="../assets/icons/location.png"
            alt="Location Icon"
            class="icon me-2"
          />
          <span>{{ job.location }}{{ job.state ? `, ${job.state}` : "" }}</span>
        </div>
        <div class="d-flex align-items-center">
          <img
            src="../assets/icons/experience.png"
            alt="Experience Icon"
            class="icon me-2"
          />
          <span>{{ job.experienceRequired }}</span>
        </div>
        <div class="d-flex align-items-center">
          <img
            src="../assets/icons/jobtype.png"
            alt="Job Type Icon"
            class="icon me-2"
          />
          <span>{{ job.type }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const showShareBox = ref(false);

const toggleShareBox = () => {
  showShareBox.value = !showShareBox.value;
};

const navigateToJob = () => {
  router.push(`/jobs/${props.job.id}`);
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
.job-card {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border-radius: 8px !important;
  border: 1px solid #e9ecef;
  position: relative;
}

.job-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 18px;
  height: 18px;
  opacity: 0.7;
}

.share-icon {
  width: 20px;
  height: 20px;
  opacity: 0.7;
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

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #212529;
}

.card-subtitle {
  font-size: 0.9rem;
}

/* Share Box Styles */
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

.share-option span {
  font-size: 0.75rem;
  color: #495057;
}

@media (max-width: 768px) {
  .card-body {
    padding: 1.25rem;
  }

  .d-flex.flex-wrap {
    gap: 1rem !important;
    row-gap: 0.5rem !important;
  }

  .share-box {
    width: 200px;
  }
}

.share-options-row {
  display: flex;
  justify-content: space-around;
  gap: 8px;
  flex-wrap: nowrap;
}

.share-option {
  flex-direction: column;
  align-items: center;
  text-align: center;
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
