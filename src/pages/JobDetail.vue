<template>
  <div class="py-4" v-if="job">
    <div class="row mb-4">
      <div class="col-md-6 col-12">
        <div class="d-flex justify-content-start">
          <h2>{{ job.title }}</h2>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-block">
        <div class="d-flex justify-content-end align-items-center gap-3">
          <ShareIcon :job="job" />
          <ApplyButton />
        </div>
      </div>
    </div>

    <div class="row pt-4">
      <!-- Left scrollable content -->
      <div class="col-md-8 col-12 order-2 order-md-1">
        <div
          class="scrollspy-container position-relative overflow-auto"
          style="height: 600px"
          data-bs-spy="scroll"
          data-bs-target="#sidebar"
          data-bs-smooth-scroll="true"
          tabindex="0"
        >
          <div id="job-description" class="border bg-white rounded-3 p-4 mb-4">
            <h5 class="mb-2">Job Description</h5>
            <div>
              <p>
                {{ job.fullDescription }} Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Magnam soluta eaque rerum modi
                asperiores quo voluptatibus, sed, libero incidunt odio a debitis
                ipsa culpa laudantium minima sequi in. Laboriosam, atque?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum soluta harum nostrum tempora possimus ea commodi!
                Dicta tenetur explicabo odio numquam quod illo culpa officiis
                accusantium, veniam aperiam expedita! Sequi.
              </p>
            </div>
          </div>
          <div id="experience" class="border bg-white rounded-3 p-4 mb-4">
            <h5 class="mb-2">Experience and Qualifications</h5>
            <div>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit odit corrupti illo quis, voluptatibus, tempora optio.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit odit corrupti illo quis, voluptatibus, tempora optio.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit odit corrupti illo quis, voluptatibus, tempora optio.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit odit corrupti illo quis, voluptatibus, tempora optio.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit odit corrupti illo quis, voluptatibus, tempora optio.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit odit corrupti illo quis, voluptatibus, tempora optio.
                </li>
              </ul>
            </div>
          </div>
          <div id="what-youll-do" class="border bg-white rounded-3 p-4 mb-4">
            <h5 class="mb-2">What You'll Do</h5>
            <div>
              <ul>
                <li>
                  Lead the architecture, design, and implementation of web
                  applications.
                </li>
                <li>
                  Write clean, efficient, and well-documented code for both
                  frontend and backend.
                </li>
                <li>
                  Implement automated testing strategies to ensure reliability.
                </li>
                <li>
                  Collaborate with cross-functional teams:
                  <ul>
                    <li>Product managers</li>
                    <li>Designers</li>
                    <li>Engineers</li>
                  </ul>
                </li>
                <li>
                  Work closely with product teams to align development with
                  business goals.
                </li>
                <li>
                  Translate product requirements into technical specifications.
                </li>
                <li>
                  Develop, test, and maintain scalable, secure, and
                  high-performance applications.
                </li>
                <li>
                  Ensure code and application quality:
                  <ul>
                    <li>
                      Ensure best practices in code quality, performance, and
                      security.
                    </li>
                    <li>Conduct code reviews and enforce coding standards.</li>
                    <li>
                      Identify and mitigate security vulnerabilities in
                      applications.
                    </li>
                  </ul>
                </li>
                <li>
                  Guide and mentor junior developers:
                  <ul>
                    <li>Provide technical guidance and mentorship.</li>
                    <li>
                      Foster a culture of continuous learning and skill
                      development.
                    </li>
                  </ul>
                </li>
                <li>
                  Optimize application performance:
                  <ul>
                    <li>
                      Optimize applications for maximum speed and scalability.
                    </li>
                    <li>
                      Implement performance tuning techniques for frontend and
                      backend.
                    </li>
                    <li>
                      Optimize database queries and server response times.
                    </li>
                  </ul>
                </li>
                <li>
                  Stay updated with emerging technologies:
                  <ul>
                    <li>
                      Research and integrate new tools, frameworks, and best
                      practices.
                    </li>
                    <li>
                      Participate in tech conferences and knowledge-sharing
                      sessions.
                    </li>
                  </ul>
                </li>
                <li>
                  Manage deployment and infrastructure:
                  <ul>
                    <li>
                      Handle deployment, CI/CD pipelines, and cloud
                      infrastructure management.
                    </li>
                    <li>
                      Design and maintain robust CI/CD pipelines for seamless
                      deployments.
                    </li>
                    <li>
                      Ensure high availability and scalability of cloud
                      infrastructure.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Right sticky sidebar -->
      <div class="col-md-4 col-12 order-1 order-md-2 mb-md-0 mb-4">
        <div class="position-sticky" style="top: 1rem" id="sidebar">
          <div
            class="border bg-white rounded-3 d-flex flex-column px-5 py-4 gap-1"
          >
            <div>
              <h6 class="job-detail-heading">Experience</h6>
              <p>{{ job.experienceRequired }}</p>
            </div>
            <div>
              <h6 class="job-detail-heading">Location</h6>
              <p>{{ job.location }}</p>
            </div>
            <div>
              <h6 class="job-detail-heading">Employment Type</h6>
              <p>{{ job.type }}</p>
            </div>
            <div>
              <h6 class="job-detail-heading">Department</h6>
              <p>Technology Systems</p>
            </div>
            <div>
              <h6 class="job-detail-heading">Job Timings</h6>
              <p>Flexible timings with partial overlap with U.S. Time zone.</p>
            </div>
            <div>
              <h6 class="job-detail-heading">Education</h6>
              <p>
                Bachelor's degree in Computer Science, Information Technology,
                or a related field.
              </p>
            </div>
            <div
              class="d-md-none d-block d-flex justify-content-between align-items-center"
            >
              <ShareIcon :job="job" />
              <ApplyButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="py-4">
    <div class="alert alert-danger border-0">Job not found</div>
    <router-link to="/" class="btn btn-outline-secondary border-0"
      >Back to Jobs</router-link
    >
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useJobsStore } from "../store/jobs";
import JobDescription from "../components/JobDescription.vue";
import ApplyButton from "../components/ApplyButton.vue";
import ShareIcon from "../components/ShareIcon.vue";

const route = useRoute();
const jobsStore = useJobsStore();

const job = computed(() => jobsStore.getJobById(route.params.id));
</script>

<style>
.job-detail-heading {
  color: #0029ab;
}
.scrollspy-container {
  height: 600px; /* Adjust as needed */
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
}

.scrollspy-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}
</style>
