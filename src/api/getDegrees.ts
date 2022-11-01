import axios from "axios";

import { Degree } from "./types";

const getDegrees = async () => await axios.get<Degree[]>("http://localhost:3000/degrees");

export default getDegrees;