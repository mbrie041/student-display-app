export function Student(props) {
  return (
    <div>
      <img src={props.pic} alt={props.firstName} />
      <div className="studentInfo">
        <div className="fullName">
          <b>
            {props.firstName} {props.lastName}
            {"\n"}
          </b>
        </div>
        <div className="Email">
          Email: {props.email} {"\n"}
        </div>

        <div className="Company">
          Company: {props.company} {"\n"}
        </div>
        <div className="Skill">
          Skill: {props.skill} {"\n"}
        </div>
        <div className="Average">
          Average: {averageCalculator([props.grades])}%{"\n"}
        </div>
      </div>
    </div>
  );

  function averageCalculator([grades]) {
    let total = 0;
    let result = grades.map((x) => {
      return parseInt(x, 10);
    });
    for (let i = 0; i < result.length; i++) {
      total += result[i];
    }
    let avg = total / result.length;
    return avg;
  }
}
