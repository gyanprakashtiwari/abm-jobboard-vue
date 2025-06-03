import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useJobsStore = defineStore("jobs", () => {
  const jobs = ref([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Noida",
      state: "UP",
      type: "Part-time",
      postDate: "2 days ago",
      experienceRequired: "3-5 years of experience in Software Development",
      description:
        "We are looking for a skilled frontend developer with Vue.js experience.",
      fullDescription:
        "Ho Join our team to build amazing web applications using Vue 3, Vite, and modern JavaScript",
    },
    {
      id: 2,
      title: "Software Developer",
      company: "Slam Tech Corp",
      location: "Bangalore",
      state: "KA",
      type: "Full-time",
      postDate: "2 weeks ago",
      experienceRequired: "5-10 years of experience in Software Development",
      description:
        "We are looking for a skilled frontend developer with Vue.js experience.",
      fullDescription:
        "Ho Join our team to build amazing web applications using Vue 3, Vite, and modern JavaScript...",
    },
    {
      id: 3,
      title: "Fullstack Developer",
      company: "Crap Technoligies",
      location: "Gurgaon",
      state: "HR",
      type: "Full-time",
      postDate: "1 week ago",
      experienceRequired: "4-6 years of experience in Fullstack Development",
      description:
        "We are looking for a skilled frontend developer with Vue.js experience.",
      fullDescription:
        "Ho Join our team to build amazing web applications using Vue 3, Vite, and modern JavaScript...",
    },
    {
      id: 4,
      title: "Devops Engineer",
      company: "SpaceX",
      location: "Bangalore",
      state: "KA",
      type: "Full-time",
      postDate: "3 weeks ago",
      experienceRequired: "5-8 years of experience in DevOps Engineering",
      description:
        "We are looking for a skilled frontend developer with Vue.js experience.",
      fullDescription:
        "Ho Join our team to build amazing web applications using Vue 3, Vite, and modern JavaScript...",
    },
    {
      id: 5,
      title: "Fullstack Developer",
      company: "Crap Technoligies",
      location: "Gurgaon",
      state: "HR",
      type: "Full-time",
      postDate: "1 week ago",
      experienceRequired: "5-10 years of experience in Software Development",
      description:
        "We are looking for a skilled frontend developer with Vue.js experience.",
      fullDescription:
        "Ho Join our team to build amazing web applications using Vue 3, Vite, and modern JavaScript...",
    },
    {
      id: 6,
      title: "Fullstack Developer",
      company: "Crap Technoligies",
      location: "Gurgaon",
      state: "HR",
      type: "Full-time",
      postDate: "1 week ago",
      experienceRequired: "5-10 years of experience in Software Development",
      description:
        "We are looking for a skilled frontend developer with Vue.js experience.",
      fullDescription:
        "Ho Join our team to build amazing web applications using Vue 3, Vite, and modern JavaScript...",
    },
    {
      id: 7,
      title: "Fullstack Developer",
      company: "Crap Technoligies",
      location: "Gurgaon",
      state: "HR",
      type: "Full-time",
      postDate: "1 week ago",
      experienceRequired: "5-10 years of experience in Software Development",
      description:
        "We are looking for a skilled frontend developer with Vue.js experience.",
      fullDescription:
        "Ho Join our team to build amazing web applications using Vue 3, Vite, and modern JavaScript...",
    },
    {
      id: 8,
      title: "Fullstack Developer",
      company: "Crap Technoligies",
      location: "Gurgaon",
      state: "HR",
      type: "Full-time",
      postDate: "1 week ago",
      experienceRequired: "5-10 years of experience in Software Development",
      description:
        "We are looking for a skilled frontend developer with Vue.js experience.",
      fullDescription:
        "Ho Join our team to build amazing web applications using Vue 3, Vite, and modern JavaScript...",
    },
    {
      id: 9,
      title: "Fullstack Developer",
      company: "Crap Technoligies",
      location: "Gurgaon",
      state: "HR",
      type: "Full-time",
      postDate: "1 week ago",
      experienceRequired: "5-10 years of experience in Software Development",
      description:
        "We are looking for a skilled frontend developer with Vue.js experience.",
      fullDescription:
        "Ho Join our team to build amazing web applications using Vue 3, Vite, and modern JavaScript...",
    },
    {
      id: 10,
      title: "Senior Engineer",
      company: "Blub Moon",
      location: "Gurgaon",
      state: "HR",
      type: "Full-time",
      postDate: "1 month ago",
      experienceRequired: "10+ years of experience in Software Engineering",
      description:
        "We are looking for a skilled frontend developer with Vue.js experience.",
      fullDescription:
        "Ho Join our team to build amazing web applications using Vue 3, Vite, and modern JavaScript...",
    },
  ]);

  const addJob = (newJob) => {
    jobs.value.push({
      id: jobs.value.length + 1,
      ...newJob,
    });
  };

  const getJobById = (id) => {
    return jobs.value.find((job) => job.id === Number(id));
  };

  return { jobs, addJob, getJobById };
});
