import getJobs from "@/api/getJobs";

const actions = {
  FETCH_JOBS: async (context) => {
    const jobListings = await getJobs();
    context.commit("RECEIVE_JOBS", jobListings.data);
  },
};

export default actions;
