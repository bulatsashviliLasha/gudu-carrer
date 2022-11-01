import axios from "axios";

import { Job } from "./types";

const getJobs = async () => await axios.get<Job[]>("http://localhost:3000/jobs");

export default getJobs;
