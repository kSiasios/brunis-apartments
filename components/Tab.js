export default function Tab(props) {
  return (
    <button
      className={`loopokrator-tab-btn ${
        props.isActive === "true" ? "active" : ""
      }`}
      onClick={props.tabClickHandler}
    >
      {props.text}
    </button>
  );
}
