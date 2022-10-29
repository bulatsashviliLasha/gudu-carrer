<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            :to="{ name: 'job-results', query: { page: previousPage } }"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            :to="{ name: 'job-results', query: { page: nextPage } }"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted } from "vue";

import JobListing from "@/components/job-results/JobListing.vue";

import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";
import { useFilteredJobs } from "@/store/composables";
import useCurrentPage from "@/composables/useCurrentPage";
import { useFetchJobsDispatch } from "@/store/composables";

const filteredJobs = useFilteredJobs();

onMounted(useFetchJobsDispatch);

const currentPage = useCurrentPage();

const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));
const { previousPage, nextPage } = usePreviousAndNextPages(
  currentPage,
  maxPage
);

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value;
  const firstJobIndex = (pageNumber - 1) * 10;
  const lastJobIndex = pageNumber * 10;
  return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
});
</script>
