const getters = {
  UNIQUE_ORGANIZATIONS(state) {
    const organizations = new Set();
    state.jobs.forEach((job) => organizations.add(job.organization));
    return organizations;
  },
  UNIQUE_JOB_TYPES(state) {
    const uniqueJobTypes = new Set();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  INCLUDE_JOB_BY_ORGANIZATION: (state) => (job) => {
    if (state.selectedOrganizations.length === 0) return true;
    return state.selectedOrganizations.includes(job.organization);
  },
  INCLUDE_JOB_BY_JOB_TYPE: (state) => (job) => {
    if (state.selectedJobTypes.length === 0) return true;
    return state.selectedJobTypes.includes(job.jobType);
  },
  FILTERED_JOBS(state, getters) {
    return state.jobs.filter(
      (job) =>
        getters.INCLUDE_JOB_BY_ORGANIZATION(job) &&
        getters.INCLUDE_JOB_BY_JOB_TYPE(job)
    );
  },
};

export default getters;
