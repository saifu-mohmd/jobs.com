import "./JobTypeInput.css";

function JobTypeInput(props) {
  return (
    <select className="fs-sm jobTypeInput">
      {props.jobtypeinput}
      <option value="option1" selected disabled>
        {props.jobtypeoption}
      </option>
      <option value="option2">{props.jobtypeoption1} </option>
    </select>
  );
}

export default JobTypeInput;
