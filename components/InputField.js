import Link from "next/link";

export default function InputField(props) {
  return (
    <div
      className={props.className}
      data-label={props.dataLabel}
      data-is-empty="true"
    >
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={updateLabel}
      ></input>
    </div>
  );
}

function updateLabel(e) {
  const input = e.target;
  const container = input.parentElement;

  const value = input.value;

  container.setAttribute("data-is-empty", value === "");
}
