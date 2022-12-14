import { GlobalState } from "./types";
import { Job } from "../api/types";

interface IncludeJobGetters {
  INCLUDE_JOB_BY_ORGANIZATION: (job: Job) => boolean;
  INCLUDE_JOB_BY_JOB_TYPE: (job: Job) => boolean;
  INCLUDE_JOB_BY_DEGREE: (job: Job) => boolean;
  INCLUDE_JOB_BY_SKILL: (job: Job) => boolean;
}

const getters = {
  UNIQUE_ORGANIZATIONS(state: GlobalState) {
    const organizations = new Set<string>();
    state.jobs.forEach((job) => organizations.add(job.organization));
    return organizations;
  },
  UNIQUE_JOB_TYPES(state: GlobalState) {
    const uniqueJobTypes = new Set<string>();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  UNIQUE_DEGREES(state: GlobalState) {
    return state.degrees.map((degree) => degree.degree);
  },
  INCLUDE_JOB_BY_ORGANIZATION: (state: GlobalState) => (job: Job) => {
    if (state.selectedOrganizations.length === 0) return true;
    return state.selectedOrganizations.includes(job.organization);
  },
  INCLUDE_JOB_BY_JOB_TYPE: (state: GlobalState) => (job: Job) => {
    if (state.selectedJobTypes.length === 0) return true;
    return state.selectedJobTypes.includes(job.jobType);
  },
  INCLUDE_JOB_BY_DEGREE: (state: GlobalState) => (job: Job) => {
    if (state.selectedDegrees.length === 0) return true;
    return state.selectedDegrees.includes(job.degree)
  },
  INCLUDE_JOB_BY_SKILL: (state: GlobalState) => (job: Job) => {
    return job.title.toLowerCase().includes(state.skillsSearchTerm.toLowerCase());
  },
  FILTERED_JOBS(state: GlobalState, getters: IncludeJobGetters) {
    return state.jobs.filter(
      (job) =>
        getters.INCLUDE_JOB_BY_ORGANIZATION(job) &&
        getters.INCLUDE_JOB_BY_JOB_TYPE(job) &&
        getters.INCLUDE_JOB_BY_DEGREE(job) &&
        getters.INCLUDE_JOB_BY_SKILL(job)
    );
  },
};

export default getters;
