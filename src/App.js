import "./App.css";
import "./components/Student.css";
import { Student } from "./components/Student";
import { useStudentData } from "./hooks/fetch";
import { useState } from "react";

function App() {
  const data = useStudentData();
  const [searchTerm, setSearchTerm] = useState("");
  if (typeof data.response === "object") {
    return (
      <div className="App">
        <input
          className="searchBox"
          type="text"
          placeholder="Search by name"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
        {data.response
          .filter((val) => nameFilter(searchTerm, val))
          .map((student) => (
            <Student key={student.id} {...student}></Student>
          ))}
      </div>
    );
  }
  return <div>{data.toString()}</div>;
}

export default App;
function nameFilter(searchTerm, val) {
  return (
    searchTerm === "" ||
    val.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
