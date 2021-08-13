import "./App.css";
import { useStudentData } from "./fetch";

function App() {
  const data = useStudentData();
  return <div></div>;
}

// https://api.hatchways.io/assessment/students
export default App;
