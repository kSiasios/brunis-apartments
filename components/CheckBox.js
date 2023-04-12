export default function CheckBox(props) {
  return (
    <label className="loopokrator-checkbox">
      {" "}
      <input type="checkbox" />
      <div className="checkbox-container"></div>
      <p>{props.label}</p>
    </label>
  );
}
