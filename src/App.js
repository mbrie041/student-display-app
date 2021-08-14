import "./App.css";
import { Student } from "./components/Student";
import { useStudentData } from "./hooks/fetch";

function App() {
  const data = useStudentData();
  if (typeof data.response === "object") {
    return data.response.map((student) => (
      <Student key={student.id} {...student}></Student>
    ));
  }
  return <div>{data.toString()}</div>;
}

export default App;
