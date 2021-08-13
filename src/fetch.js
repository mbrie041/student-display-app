import axios from "axios";
import { useEffect } from "react";

export function useStudentData() {
  useEffect(fetchData);
}

async function fetchData() {
  console.log("Fetching data from source");
  const response = await axios.get(
    "https://api.hatchways.io/assessment/students"
  );
  console.log(response.data);
}
