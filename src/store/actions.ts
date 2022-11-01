import { Commit } from "vuex";

import getJobs from "../api/getJobs";
import getDegrees from "../api/getDegrees";

interface Context {
  commit: Commit;
}

const actions = {
  FETCH_JOBS: async (context: Context) => {
    const jobListings = await getJobs();
    context.commit("RECEIVE_JOBS", jobListings.data);
  },
  FETCH_DEGRESS: async (context: Context) => {
    const degrees = await getDegrees();
    context.commit("RECEIVE_DEGREES", degrees.data);
  }
};

export default actions;
