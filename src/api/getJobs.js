import axios from "axios";

const getJobs = async () => await axios.get("http://localhost:3000/jobs");

export default getJobs;
