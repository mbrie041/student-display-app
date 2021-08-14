/**
 * A function for displaying an individual students records.
 * @param {object} props - A single students record as a complex object.
 * @param {string} props.firstName - The students first name.
 * @param {string} props.pic - A hyperlink to the students picture.
 * @param {string} props.lastName - The students last name.
 * @param {string} props.email - The students email address.
 * @param {string} props.company - The students first name.
 * @param {string} props.skill - The students place of employment.
 * @param {Array} props.grades - The students grades.
 * @returns A div displaying an individual students records with their picture or their first name.
 */

export function Student(props) {
  return (
    <div className="student">
      <img className="studentPic" src={props.pic} alt={props.firstName} />
      <div className="studentInfo">
        <h3 className="fullName">
          {props.firstName} {props.lastName}
        </h3>
        <div className="Email">Email: {props.email}</div>
        <div className="Company">Company: {props.company}</div>
        <div className="Skill">Skill: {props.skill}</div>
        <div className="Average">
          Average: {averageCalculator(props.grades)}%
        </div>
      </div>
    </div>
  );

  function averageCalculator(grades) {
    let result = grades.map((x) => parseInt(x, 10)).reduce((a, b) => a + b);
    let avg = result / grades.length;
    return avg;
  }
}
