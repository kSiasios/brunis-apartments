import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

import styles from "../styles/Select.module.css";

export default function Select(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setOption] = useState("");
  // const [val, setValue] = useState(value);
  const valueChangeHandler = (value) => {
    props.value(value);
  };

  return (
    <div className="loopokrator-select-menu" data-is-open={isOpen}>
      {props.label ? <h3 className="select-label">{props.label}</h3> : ""}

      {/* <div className="loopokrator-select">
      </div> */}
      <button
        className={styles.loopokrator_select}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p>{selectedOption !== "" ? selectedOption : "All"}</p>
        <div className="arrow">
          {isOpen === true ? <SlArrowUp /> : <SlArrowDown />}
        </div>
      </button>
      <div className="loopokrator-options">
        <button
          className="loopokrator-option"
          onClick={() => {
            setOption("All");
            // setValue("All");
            valueChangeHandler("All");
            setIsOpen(!isOpen);
          }}
        >
          All
        </button>
        {props.options.map((option, index) => (
          <button
            className="loopokrator-option"
            onClick={() => {
              setOption(option);
              // setValue(option);
              valueChangeHandler(option);
              setIsOpen(!isOpen);
            }}
            key={index}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="select-close"
        onClick={() => {
          //   setOption(option);
          setIsOpen(!isOpen);
        }}
      ></button>
    </div>
  );
}
