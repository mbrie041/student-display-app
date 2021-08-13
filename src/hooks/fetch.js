import axios from "axios";
import { useEffect, useState } from "react";

export function useStudentData() {
  const [state, setState] = useState({
    response: "no response given",
  });

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.hatchways.io/assessment/students"
      );
      setState({ response: response.data.students });
    }
    fetchData();
  }, []);

  return state;
}
