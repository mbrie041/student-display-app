import axios from "axios";
import { useEffect, useState } from "react";

/**
 * A hook that fetches student records from the hatchways JSON API.
 * @returns Object containing array of objects or an error message.
 */
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
